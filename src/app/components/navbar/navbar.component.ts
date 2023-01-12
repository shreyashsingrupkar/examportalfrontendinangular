import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(public loginService:LoginService,private router:Router){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  public logOut(){
    this.loginService.logOut();
    console.log('logout');
    this.router.navigate(['login']);
    //window.location.href='/login'
  }

}
