import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FixproblemsComponent } from './fix-problems/fix-problems.component';
import { HomeComponent } from './home/home.component';
import { StubComponent } from './stub/stub.component';
import { SpyonComponent } from './spyon/spyon.component';
import { MockServiceComponent } from './mock-service/mock-service.component';

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
    path: 'spyon',
    component: SpyonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
