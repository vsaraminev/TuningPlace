import { PartService } from './../part.service';
import { Component, OnInit, Input } from '@angular/core';
import { Part } from 'src/app/shared/models/part';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part-info',
  templateUrl: './part-info.component.html',
  styleUrls: ['./part-info.component.css']
})
export class PartInfoComponent implements OnInit {
  @Input() part: Part;
  @Input() description: string;
  
  constructor(
    private router: Router,
    private partService: PartService
  ) { }

  ngOnInit() {
  }

  deletePart() {

  }

}
