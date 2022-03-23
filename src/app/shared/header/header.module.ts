import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { BackButtonDirective } from 'xplat/core/directives';

@NgModule({
  declarations: [
    HeaderComponent,
    BackButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
