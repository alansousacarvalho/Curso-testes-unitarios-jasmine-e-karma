import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FixproblemsComponent } from './fix-problems/fix-problems.component';

const routes: Routes = [
  {
    path: 'fix-problems',
    component: FixproblemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
