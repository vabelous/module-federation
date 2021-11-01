import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCaseComponent } from './show-case.component';

const routes: Routes = [{
  path: '',
  component: ShowCaseComponent,
  children: [
    {
      path: 'sub-module-1',
      loadChildren: () => import('./show-case-sub-module1/show-case-sub-module1.module')
        .then(mod => mod.ShowCaseSubModule1Module)
    },
    {
      path: 'report-x',
      loadChildren: () => import('../report-x/report-x-routing.module')
        .then(mod => mod.ReportXRoutingModule)
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowCaseRoutingModule { }
