import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyModule } from './modules/agency/agency.module';

// Modulos para el Routing
import { DashboardModule } from './modules/dashboard/dashboard.module';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule
  },
  {
    path: 'agecies',
    loadChildren: () => AgencyModule
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
