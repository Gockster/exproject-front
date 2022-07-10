import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../common/country';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl = 'http://localhost:8080/home/countries';

  constructor(private httpClient: HttpClient) { }

  getCountryList(): Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.baseUrl}`)
  }
}   
    
    


