import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FixproblemsComponent } from './fix-problems/fix-problems.component';
import { HomeComponent } from './home/home.component';
import { StubComponent } from './stub/stub.component';
import { SpyonComponent } from './spyon/spyon.component';
import { MockServiceComponent } from './mock-service/mock-service.component';
import { RequestComponent } from './request/request.component';
import { AssincronoComponent } from './assincrono/assincrono.component';
import { TesteComponenteComponent } from './teste-componente/teste-componente.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fix-problems',
    component: FixproblemsComponent
  },
  {
    path: 'mock',
    component: MockServiceComponent
  },
  {
    path: 'stub',
    component: StubComponent
  },
  {
    path: 'request',
    component: RequestComponent
  },
  {
    path: 'assincrono',
    component: AssincronoComponent
  },
  {
    path: 'teste-componente',
    component: TesteComponenteComponent
  },
  {
    path: 'spyon',
    component: SpyonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
