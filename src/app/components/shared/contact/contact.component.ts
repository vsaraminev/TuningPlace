import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 42.698334;
  lng: number = 23.319941;
  constructor() { }

  ngOnInit() {
  }

}
