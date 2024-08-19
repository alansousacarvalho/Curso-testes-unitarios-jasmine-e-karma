import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixproblemsComponent } from './fix-problems/fix-problems.component';
import { FixProblemsService } from './services/fix-problems.service';
import { ModalErrorComponent } from './modal-error/modal-error/modal-error.component';
import { MatchersJasmineComponent } from './matchers-jasmine/matchers-jasmine.component';
import { MockServiceComponent } from './mock-service/mock-service.component';
import { StubComponent } from './stub/stub.component';
import { HomeComponent } from './home/home.component';
import { SpyonComponent } from './spyon/spyon.component';
import { SpyonpropertyComponent } from './spyonproperty/spyonproperty.component';
import { RequestComponent } from './request/request.component';
import { AssincronoComponent } from './assincrono/assincrono.component';
import { PrimeNgModule } from 'src/shared/primeng.module';
import { AlterarUsuarioComponent } from './request/alterar-usuario/alterar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    FixproblemsComponent,
    ModalErrorComponent,
    MatchersJasmineComponent,
    MockServiceComponent,
    StubComponent,
    HomeComponent,
    SpyonComponent,
    SpyonpropertyComponent,
    RequestComponent,
    AssincronoComponent,
    AlterarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    PrimeNgModule,
  ],
  providers: [
    FixProblemsService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
