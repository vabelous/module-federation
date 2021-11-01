import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportXComponent } from './report-x.component';

const routes: Routes = [{
  path: '',
  component: ReportXComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportXRoutingModule { }
