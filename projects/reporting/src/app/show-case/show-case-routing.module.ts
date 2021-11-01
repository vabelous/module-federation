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
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowCaseRoutingModule { }
