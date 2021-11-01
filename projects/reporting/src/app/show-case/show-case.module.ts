import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowCaseRoutingModule } from './show-case-routing.module';
import { ShowCaseComponent } from './show-case.component';


@NgModule({
  declarations: [ShowCaseComponent],
  imports: [
    CommonModule,
    ShowCaseRoutingModule
  ]
})
export class ShowCaseModule { }
