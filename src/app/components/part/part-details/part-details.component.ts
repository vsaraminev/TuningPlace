import { AuthService } from 'src/app/core/services/auth.service';
import { Part } from '../../../core/models/part';
import { PartService } from '../../../core/services/part.service';
import { OrderService } from '../../../core/services/order.service'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private partService: PartService,
    private orderService: OrderService,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      let id = data['id'];
      this.partId = id;
      this.partService.getPart(id).subscribe((data) => {
        this.part = data;
      });
    })
  }

  buyPart(partId: string) {
    this.orderService.userBuyPart(partId)
      .subscribe(() => {
        this.router.navigate(['/part/all']);
      })
  }

  deletePart(id: string) {
    this.partService.deletePart(id)
      .subscribe(() => {
        this.router.navigate(['/part/all']);
      });
  }
}
