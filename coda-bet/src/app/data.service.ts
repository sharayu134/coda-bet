import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Person } from 'src/app/select-nine/select-nine.component';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  retrievePersons() {
    return this.http.get<Person[]>(`https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json`);
  }
}
