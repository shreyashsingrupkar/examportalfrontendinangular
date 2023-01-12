import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";


@Injectable()
export class AuthsInterceptor implements HttpInterceptor{
    constructor(private loginService : LoginService ){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      //  throw new Error("Method not implemented.");


        const token=this.loginService.getToken();
        let authReq=req;
        if(token!=null){
            authReq=authReq.clone({setHeaders:{Authorization:`Bearer ${token}`},
        });
        }
        return next.handle(authReq);

    }
    
}

export const authsInterceptorProviders=[
    {
        provide : HTTP_INTERCEPTORS,
        useClass:AuthsInterceptor,
        multi:true,
    },
    
];