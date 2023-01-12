import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService){}
  ngOnInit(): void {
    
  }

  public LoginData={
    username:'',
    password:''
  }


  Login(){
    this.loginService.logOut();
    if(this.LoginData.username.trim()==''|| this.LoginData.username==null){
      alert("Please Enter Username");
      return;
    }
    if(this.LoginData.password==''|| this.LoginData.password==null){
      alert("Please Enter Password");
      return;
    }
    console.log(this.LoginData);


    //request to server to generate token
    this.loginService.generateToken(this.LoginData).subscribe(
      (data:any)=>{
        console.log("local storage before generationg token ");
        console.log(localStorage)
        this.loginService.logOut();
        console.log("local storage before generationg token calling logout function ");
        console.log(localStorage)
        console.log('token generated')
        console.log(data.token);
       
        //login
        //save token to local storage
        if(this.loginService.loginUser(data)){
          console.log('token saved to local storage');
        }
        console.log("local storage after generationg token ");
        console.log(localStorage);

        this.loginService.getCurrentUserDetails().subscribe(

          (user)=>{
            console.log(user)
            this.loginService.userDetails(user);
            this.loginService.setUserRole(user)

          },(error)=>{

          }
          

        );
        console.log("local storage after generationg token and geting current user details ");
        console.log(localStorage);

        if(this.loginService.isLoggedIn()){

            if(this.loginService.getUserRole()=='ADMIN'){
              console.log('welcome to admin dashboard')
            }else if(this.loginService.getUserRole()=='NORMAL'){
              console.log('welcome to user dashboard')
            }

        }



       

      },
      (error)=>{
        console.log(error);
      }
      
    );
  }

}
