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
import { TesteComponenteComponent } from './teste-componente/teste-componente.component';
import { InputOutputComponent } from './teste-componente/input-output/input-output.component';
import { HttpPipe } from 'src/shared/pipes/http.pipe';
import { TestingPipesDiretiveRouteComponent } from './testing-pipes-diretive-route/testing-pipes-diretive-route.component';
import { LoginComponent } from './login/login.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { TestandoDiretivasComponent } from './testando-diretivas/testando-diretivas.component';
import { HoverFocusDirective } from 'src/shared/directive/hoverfocus.directive';
import { FormLoginComponent } from './form-login/form-login.component';

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
    AlterarUsuarioComponent,
    TesteComponenteComponent,
    InputOutputComponent,
    TestingPipesDiretiveRouteComponent,
    HttpPipe,
    LoginComponent,
    ExtratoComponent,
    TestandoDiretivasComponent,
    FormLoginComponent
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
    FixProblemsService,
    HttpPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
