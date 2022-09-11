import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../common/country';
import { map } from 'rxjs/operators';
import { Language } from '../common/language';
import { Second } from '../common/second';
import { Expert } from '../common/expert';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
 

  private baseUrl = 'http://localhost:8080/countries';
  //languageUrl: string;
  detailUrl: string;

  constructor(private httpClient: HttpClient) { }

  getCountryList(): Observable<Country> {

    return this.httpClient.get<Country>(this.baseUrl);

  }

  getResultList():Observable<Second> {
    const resultUrl = 'http://localhost:8080/second'

    return this.httpClient.get<Second>(resultUrl);
  }

  getData(): Observable<Expert>{
    const totalUrl = 'http://localhost:8080/expert';

    return this.httpClient.get<Expert>(totalUrl);
  }
  

  // getCountryDetails(theConId: number): Observable<Country> {
  //   const detailUrl = `${this.baseUrl}/${theConId}`;

  //   return this.httpClient.get<Country>(this.detailUrl);
  // }
}











