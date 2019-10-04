import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from 'src/services/auth.service';
import { ToastModule } from 'ng-uikit-pro-standard';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule.forRoot(),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
