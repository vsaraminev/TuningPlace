import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(-35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true })
      ])
    ]),

    trigger('explainerAnim', [
      transition('* => *', [
        query('.col', style({ opacity: 0, transform: 'translateX(-40px' })),
        query('.col', stagger ('500ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]

})
export class ContactComponent implements OnInit {
  lat: number = 42.698334;
  lng: number = 23.319941;
  goals = [
    `Give your car the look it deserves and the performance it needs! We are your supplier for any engine upgrades,
  stylish modifications or a complete overhaul.
  Our products will suit all of your needs within your budget and are compatible for all road, race, rally and
  drift applications.`,
    `Improve your car’s performance with our high quality tuning parts and match its looks with our wide range of
  styling parts.`,
    `You will find parts for all makes and models in our shop. We are specialized in car parts for Japanese cars,
    especially Honda. But we also carry a wide range of products for the European car brands.`];
  constructor() {
  }

  ngOnInit() {
  }

}
