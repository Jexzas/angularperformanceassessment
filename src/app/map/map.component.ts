import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  constructor() {};
  select(event: Event): void {
    this.countrySelected.emit((event.target as HTMLElement).dataset.countryCode);
  }
  @Output() countrySelected = new EventEmitter<any>();
}

