import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from 'src/services/auth.service';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';

const firebase={
    apiKey: 'AIzaSyB4-c3qKMbhvlM5U7urjliu1XQMHmrSSZ8',
    authDomain: 'bigquerytaxi-3e6d0.firebaseapp.com',
    databaseURL: 'https://bigquerytaxi-3e6d0.firebaseio.com',
    projectId: 'bigquerytaxi-3e6d0',
    storageBucket: 'gs://bigquerytaxi-3e6d0.appspot.com'
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
