import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCaseComponent } from './show-case.component';

const routes: Routes = [{
  path: '',
  component: ShowCaseComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowCaseRoutingModule { }
