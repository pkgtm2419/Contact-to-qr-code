import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './_shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      newestOnTop: true,
      tapToDismiss: true,
      progressBar: true,
      progressAnimation: 'increasing'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
