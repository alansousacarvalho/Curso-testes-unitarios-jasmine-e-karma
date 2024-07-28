import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixproblemsComponent } from './fix-problems/fix-problems.component';
import { FixProblemsService } from './services/fix-problems.service';
import { ModalErrorComponent } from './modal-error/modal-error/modal-error.component';

@NgModule({
  declarations: [
    AppComponent,
    FixproblemsComponent,
    ModalErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    FixProblemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
