import { Expert } from './../../common/expert';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from 'src/app/services/country.service';
import { Region } from 'src/app/common/region';

@Component({
  selector: 'drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  expert: Expert;
  region: Region[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    }
    
  doDrop(regionName: string) { 
    this.router.navigateByUrl(`/region/${regionName}`);
  }

  
}



