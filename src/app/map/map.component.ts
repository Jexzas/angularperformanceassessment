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
  @Output() countrySelected = new EventEmitter<any>();

  touchSelect(e: Event): void {
    console.log((e.target as HTMLElement).dataset);
    this.countrySelected.emit((e.target as HTMLElement).dataset.countryCode);
  }

  ngOnInit(){ 
    let paths: NodeListOf<Element> = document.querySelectorAll('path');
    for (let path of paths) {
        path.addEventListener('click', (e: Event) => {
          this.countrySelected.emit((e.target as HTMLElement).dataset.countryCode);
        })
      }
  }
}

