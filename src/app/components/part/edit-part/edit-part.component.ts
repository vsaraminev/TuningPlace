import { Part } from '../../../shared/models/part';
import { PartService } from './../part.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-part',
  templateUrl: './edit-part.component.html',
  styleUrls: ['./edit-part.component.css']
})
export class EditPartComponent implements OnInit {
  form: FormGroup;
  part: Part;

  constructor(
    private fb: FormBuilder,
    private partService: PartService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4)]],
      model: ['', [Validators.required, Validators.minLength(4)]],
      year: ['', [Validators.required, Validators.min(1920), Validators.max(2019)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['', [Validators.required, Validators.min(0.1)]],
      image: ['', [Validators.required]]
    });

    let id = this.route.snapshot.params.id;

    this.partService.getPart(id).subscribe((data) => {
      this.form.patchValue({
        title: data['title'],
        model: data['model'],
        year: data['year'],
        description: data['description'],
        price: data['price'],
        image: data['image']
      })
    },
      err => {
        console.log(err)
      })
  }

  editPart() {
    let id = this.route.snapshot.params.id;
    this.partService.editPart(id, this.form.value)
      .subscribe((data) => {
        this.router.navigate(['/part/all']);
      });
  }

  get f() {
    return this.form.controls;
  }

  get invalid() {
    return this.form.invalid;
  }
}
