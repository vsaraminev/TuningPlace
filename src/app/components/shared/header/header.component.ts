import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string = '';

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }
}
