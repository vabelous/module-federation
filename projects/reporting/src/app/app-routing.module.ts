import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'show-case',
    loadChildren: () => 
      import("./show-case/show-case.module").then((m) => m.ShowCaseModule),
  },
  {
    path: '',
    redirectTo: 'show-case',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
