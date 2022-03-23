import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UIModule } from 'xplat/ui';
import { DashboardComponent } from './dashboard.component';
import { DashboardContainer } from './dashboard.container';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContainer
  ],
  exports: [
    DashboardContainer
  ],
  imports: [
    CommonModule,
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardContainer
      }
    ]),
  ]
})
export class DashboardModule { }
