import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MapModule } from './map/map.module';
import { InfoModule } from './info/info.module';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapModule, InfoModule, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ApiService]
})
export class AppComponent {
  constructor(private http: ApiService) {};
  title: string = 'PerformanceAssessment';
  countries = new Array<any>;
  async populateCountries () {
    let data = await this.http.getCountries();
    let list = await JSON.parse(data);
    this.countries = list[1];
  }
  selectedCountry: string = '';
  selectedCountryDetails: object = {};
  named: string = '';
  selectCountry(code: string): void {
    this.selectedCountry = code;
    this.selectedCountryDetails = this.countries.find((item => item.iso2Code == code));
    console.log(this.selectedCountryDetails);
    let clicked: NodeListOf<Element>;
    clicked = document.querySelectorAll(`[data-countryCode='${this.selectedCountry}'`);

    if (clicked) {
      let prevClicked: NodeListOf<Element> = document.querySelectorAll('.hover');
      for (let item of prevClicked) {
        item.classList.remove('hover');
        item.classList.add('unclick')
      }
      for (let item of clicked) {
        if (item.classList.contains('unclick')) {
          item.classList.remove('unclick');
        }
        item.classList.add('hover');
      }
    }
  }
  searchCountryByName(name: string) {
    let chosen = this.countries.find(item => item.name.toLowerCase() == (name).toLowerCase());
    if (chosen) {
      this.selectCountry(chosen.iso2Code);
    } else {
      alert("Country not found. Are you sure you spelled it correctly? (it has to match the exact registered name listed here: https://data.worldbank.org/country)");
    };
    (document.querySelector("#countryName") as HTMLInputElement).value == '';
  }

  ngOnInit() {
    this.populateCountries();
  }
}
