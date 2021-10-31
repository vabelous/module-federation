import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'show-case',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4300/showCaseEntry.js',
      remoteName: 'showCase',
      exposedModule: './ShowCaseModule'
    }).then(mod => mod.ShowCaseModule)
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
