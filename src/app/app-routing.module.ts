import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/component/login/login.component';
import { RegisterComponent } from 'src/component/register/register.component';
import { HomeComponent } from 'src/component/home/home.component';


const routes: Routes = [
  {path:'/login', component:LoginComponent},
  {path:'/register',component:RegisterComponent},
  {path:'/',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
