import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from 'src/services/auth.service';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartsComponent } from 'src/component/charts/charts.component';
import { LoginComponent } from 'src/component/login/login.component';
import { RegisterComponent } from 'src/component/register/register.component';
import { HomeComponent } from 'src/component/home/home.component';
import { NavComponent } from 'src/component/nav/nav.component';
const firebase={
    apiKey: 'AIzaSyB4-c3qKMbhvlM5U7urjliu1XQMHmrSSZ8',
    authDomain: 'bigquerytaxi-3e6d0.firebaseapp.com',
    databaseURL: 'https://bigquerytaxi-3e6d0.firebaseio.com',
    projectId: 'bigquerytaxi-3e6d0',
    storageBucket: 'gs://bigquerytaxi-3e6d0.appspot.com'
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ChartsComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
