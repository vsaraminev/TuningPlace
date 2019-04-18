import { Part } from '../../../shared/models/part';
import { PartService } from './../part.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.css']
})
export class PartDetailsComponent implements OnInit {
  part: Part;
  partId: string;

  constructor(
    private route: ActivatedRoute,
    private prartService: PartService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      let id = data['id'];
      this.partId = id;
      console.log(this.partId);
      this.prartService.getPart(id).subscribe((data) => {
        this.part = data;
      });
    })
  }

  deletePart(id: string) {

  }
}
