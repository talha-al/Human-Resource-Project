import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss']
})
export class CandidatesComponent implements OnInit {

  candidates: CandidateModel[] = [];
  link = "https://jsonplaceholder.typicode.com/users";
  searchFilterForm = new FormControl('');
  filteredArray: any = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {
    this.fetchCandidatesDatas()
  }

  ngOnInit() {
    this.searchFilterForm.valueChanges.subscribe((x) => {
      this.filter(x);
    });
  }

  fetchCandidatesDatas() {
    return this.http.get<CandidateModel[]>(this.link).subscribe(data => {
      this.candidates = data;
      this.filteredArray = data
    });
  }

  filter(param: string) {
    this.filteredArray = this.candidates.filter((a) => {
      return a.name.toLowerCase().includes(param.toLowerCase()) || a.phone.toLowerCase().includes(param.toLowerCase());
    });
  }

  removeFilter() {
    this.searchFilterForm.setValue('');
  }

  openInfoDialog(data: CandidateModel) {
      this.dialog.open(InfoDialogComponent, {
      disableClose: true,
      width: "720px",
      height: "500px",
      data: data ? data : null
    })
  }

}

export interface CandidateModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Adress;
  phone: string;
  website: string;
  company: CompanyInformation
}

export interface Adress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface CompanyInformation {
  name: string;
  catchPhrase: string;
  bs: string;
}