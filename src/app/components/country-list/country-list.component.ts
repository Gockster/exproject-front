import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/common/country';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries: Country[];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries = [{
      "country_id": 1,
      "name": "Greece",
      "area": 13120000.00,
      "country_code2": "ABR",
      "country_code3": "55123",
      "region_id": 5},
      {
        "country_id": 2,
        "name": "Spain",
        "area": 1246700.00,
        "country_code2": "45.000",
        "country_code3": "AWD",
        "region_id": 5
    }];
  }
} 


//   ngOnInit(): void {
//     this.getCountries();
//   }

//   private getCountries(){
//     this.countryService.getCountryList().subscribe(
//           data => {
//             this.countries = data;
//           });
//   }
// }

