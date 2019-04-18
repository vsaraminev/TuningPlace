import { PartService } from './../part.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-part',
  templateUrl: './create-part.component.html',
  styleUrls: ['./create-part.component.css']
})
export class CreatePartComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private partService: PartService,
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
  }
  createPart() {
    this.partService.createPart(this.form.value)
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
