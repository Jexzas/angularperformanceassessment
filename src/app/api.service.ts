import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  private endpoint = 'https://api.worldbank.org/v2/country?format=json&per_page=500';
  async queryCountries(): Promise<object> {
    return await new Promise((resolve, reject) => {
      this.http.get(this.endpoint).subscribe(
        (response) => {resolve(response)},
        (reject) => {console.error(reject)}
      );
    })
  }
  async getCountries(): Promise<string> {
    const response = await this.queryCountries();
    const data = JSON.stringify(response);
    return data;
  }
}
