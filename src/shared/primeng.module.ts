import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "src/app/app.component";
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    DividerModule,
    TableModule,
    DialogModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    DividerModule,
    TableModule,
    DialogModule,
  ],
  bootstrap: [AppComponent]
})
export class PrimeNgModule { }
