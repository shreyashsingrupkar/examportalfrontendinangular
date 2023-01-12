import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helperfile';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) { }

  //generate token
  public generateToken(LoginData:any){
    return this.http.post(`${baseUrl}/generate-token`,LoginData)
  }

  public getCurrentUserDetails(){
    return this.http.get(`${baseUrl}/current-user`)
  }

  //save token into localstorage
  public loginUser(token:any){
    localStorage.setItem('token',token.token);
    return true;
  }


  //user is logged in or not
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("token");
    console.log('is user token');
    console.log(tokenStr);

    if(tokenStr==undefined|| tokenStr==''||tokenStr==null){
      return false;
    }
    else{
      return true;
    }
  }

  //logout remove token from local storage

  public logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userrole");
    return true;
  }

  //get token
  public getToken(){
    return localStorage.getItem("token")
  }

  //save user details on local storage
  public userDetails(LoginData:any){
    localStorage.setItem('user',JSON.stringify(LoginData))
   // localStorage.setItem('user',LoginData);
  }


  //set user role
  public setUserRole(role:any){
    localStorage.setItem('userrole',role.authorities[0].authority);
  }

  //getUser details
  public getUserDetails(){
    let userStr=localStorage.getItem('user');
    console.log('user details in get user details');
    console.log(userStr);
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logOut();
      return null
    }
  }

  // get user role
  public getUserRole(){
   // let user=this.getUserDetails();

   let userStr=localStorage.getItem('userrole');
    console.log('user details in get user role');
    console.log(userStr);
    return userStr
  }


  

}
