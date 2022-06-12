import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, 
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  public login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Successfully logged in');
    }, error => {
      this.alertify.error('Login failed - please try again');
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  public loggedIn() {
    return this.authService.loggedIn();
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.alertify.message('Logged out');
    this.router.navigate(['/home']);
  }
}
