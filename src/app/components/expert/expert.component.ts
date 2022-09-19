import { Region } from './../../common/region';
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
  region: Region[];
  expert: Expert[];
  searchMode: boolean;
  dropMode: boolean;
  

  constructor(private countryService: CountryService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=> {
      this.getTotalAndSearch();
    });
  }

  getTotalAndSearch(){
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    this.dropMode = this.route.snapshot.paramMap.has('key');

    if(this.searchMode){
      this.getSearch();
    } else if(this.dropMode){
      this.getDrop();
    }
    else{
      this.getTotal();
    }
  }

  getSearch() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    this.countryService.searchAll(theKeyword).subscribe(
      data => {
       this.expert = data;
      });
  }

  getDrop() {

    const theKey: string = this.route.snapshot.paramMap.get('key')!;
    
    this.countryService.dropAll(theKey).subscribe(
      data => {
       this.expert = data;
      });
    }

  getTotal() {
   this.countryService.getData().subscribe(
    data => {
     this.expert = data;
    });
  }

 


}
