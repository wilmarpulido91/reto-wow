import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UIModule } from 'xplat/ui';
import { AgencyComponent } from './agency.component';
import { AgencyContainer } from './agency.container';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AgencyComponent,
    AgencyContainer
  ],
  imports: [
    CommonModule,
    UIModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AgencyContainer
      },
      {
        path: ':id',
        component: AgencyContainer
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ])
  ]
})
export class AgencyModule { }
