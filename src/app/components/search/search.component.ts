import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expert } from 'src/app/common/expert';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    }
    
  doSearch(value: string) { 
    this.router.navigateByUrl(`/search/${value}`);
  }
}

