import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode: boolean = false; 

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  ngOnInit() {

  }

  registerToggle() {
    this.registerMode = true;
  }
  
  public loggedIn() {
    return this.authService.loggedIn();
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
