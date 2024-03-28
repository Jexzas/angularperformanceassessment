import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, InfoComponent
  ],
  exports: [
    InfoComponent
  ]
})
export class InfoModule { }
