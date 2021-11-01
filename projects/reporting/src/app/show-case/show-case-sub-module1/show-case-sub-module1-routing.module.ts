import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCaseSubModule1Component } from './show-case-sub-module1.component';

const routes: Routes = [{
  path: '',
  component: ShowCaseSubModule1Component,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowCaseSubModule1RoutingModule { }
