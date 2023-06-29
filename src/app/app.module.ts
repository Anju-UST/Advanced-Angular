import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { GetComponent } from './get/get.component';
import { UpadteComponent } from './upadte/upadte.component';
import { FormsModule } from '@angular/forms';
import { CaddComponent } from './cadd/cadd.component';
import { CgetComponent } from './cget/cget.component';
import { CdeleteComponent } from './cdelete/cdelete.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    GetComponent,
    UpadteComponent,
    CaddComponent,
    CgetComponent,
    CdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
