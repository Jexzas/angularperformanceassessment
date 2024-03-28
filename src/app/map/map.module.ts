import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MapComponent
  ],
  exports: [
    MapComponent
  ]
})
export class MapModule { }
