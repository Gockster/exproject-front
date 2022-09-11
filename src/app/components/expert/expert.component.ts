import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { Component, OnInit } from '@angular/core';
import { Expert } from 'src/app/common/expert';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css']
})
export class ExpertComponent implements OnInit {

  expert: Expert;

  constructor(private countryService: CountryService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.getTotal();
  }
  getTotal() {
   this.countryService.getData().subscribe(
    data => {
     this.expert = data;
    });
  }
}
