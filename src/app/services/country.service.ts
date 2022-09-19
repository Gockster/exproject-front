import { Region } from './../common/region';
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

  getResultList():Observable<Second[]> {
    const resultUrl = 'http://localhost:8080/second'

    return this.httpClient.get<Second[]>(resultUrl);
  }

  getData(): Observable<Expert[]>{
    const totalUrl = 'http://localhost:8080/expert';

    return this.httpClient.get<Expert[]>(totalUrl);
  }
  
  searchAll(theKeyword: string): Observable<Expert[]> {
    const searchUrl = `http://localhost:8080/search/${theKeyword}`;

    return this.httpClient.get<Expert[]>(searchUrl);
  }

  dropAll(dropDown: string): Observable<Expert[]> {
    const dropUrl = `http://localhost:8080/region/${dropDown}`;

    return this.httpClient.get<Expert[]>(dropUrl);
  }

}











