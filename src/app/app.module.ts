import { LanguageService } from 'src/app/services/language.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './services/country.service';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryStatsComponent } from './components/country-stats/country-stats.component';
import { ExpertComponent } from './components/expert/expert.component';
import { CountryLanguagesComponent } from './components/country-languages/country-languages.component';



const routes: Routes = [ 
  {path: 'countries', component: CountryListComponent},
  {path: 'countries/languages/:id', component: CountryLanguagesComponent},
  {path: 'stats', component: CountryStatsComponent},
  {path: 'expert', component: ExpertComponent},
  {path: '', redirectTo: '/countries', pathMatch: 'full'},
  {path: '**', redirectTo: '/countries', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryStatsComponent,
    ExpertComponent,
    CountryLanguagesComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [CountryService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
