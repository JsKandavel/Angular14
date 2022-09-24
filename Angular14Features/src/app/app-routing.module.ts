import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StandaloneListComponent } from './list/standalone-list.component';

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo:'list'
  },
  {
    path:'list', component: StandaloneListComponent
  },
  {
    path: 'details/:index', loadComponent: () => import('./details/details.component').then((m) => m.DetailsComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
