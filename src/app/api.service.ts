import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  private endpoint = 'http://api.worldbank.org/v2/country';

  async getCountries() {
    await this.http.get(this.endpoint).subscribe(
      (response) => {return response},
      (error) => {console.error(error)}
    );
  }
}
