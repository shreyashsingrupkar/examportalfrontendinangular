import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashbordComponent } from './pages/admin/admindashbord/admindashbord.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
    
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
    
  },
  {
    path:'admin',
    component:AdmindashbordComponent,
    pathMatch:'full',
    canActivate:[AdminGuard]
   
  },
  {
    path:'user',
    component:UserdashboardComponent,
    pathMatch:'full',
    canActivate:[UserGuard]
    
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
