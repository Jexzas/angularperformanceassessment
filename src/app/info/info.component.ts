import { Component, Input, input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  @Input() country = {};
}
