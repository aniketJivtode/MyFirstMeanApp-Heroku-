import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact.service';
import {HttpClientModule} from '@angular/common/http';
import { contact } from './contact/models/contact';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
  

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [ContactService,contact],
  bootstrap: [AppComponent]
})
export class AppModule { }
