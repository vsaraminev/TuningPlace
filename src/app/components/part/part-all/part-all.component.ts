import { PartService } from './../part.service';
import { Part } from '../../../shared/models/part';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-part-all',
  templateUrl: './part-all.component.html',
  styleUrls: ['./part-all.component.css']
})
export class PartAllComponent implements OnInit {
  parts$: Observable<Part[]>;

  constructor(private partService: PartService, public authService: AuthService) { }

  ngOnInit() {
    this.parts$ = this.partService.getAllParts();
  }
}
