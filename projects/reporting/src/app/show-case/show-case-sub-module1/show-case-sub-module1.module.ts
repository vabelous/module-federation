import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowCaseSubModule1RoutingModule } from './show-case-sub-module1-routing.module';
import { ShowCaseSubModule1Component } from './show-case-sub-module1.component';


@NgModule({
  declarations: [ShowCaseSubModule1Component],
  imports: [
    CommonModule,
    ShowCaseSubModule1RoutingModule
  ]
})
export class ShowCaseSubModule1Module { }
