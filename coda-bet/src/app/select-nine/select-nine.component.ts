import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Url } from 'url';
import { DataService } from '../../app/data.service';


export class Person {
  constructor(
    public Name: string,
    public Price: number,
    public Bet: number,
    public ProfileImage: string
  ) {

  }
}


@Component({
  selector: 'app-select-nine',
  templateUrl: './select-nine.component.html',
  styleUrls: ['./select-nine.component.css']
})
export class SelectNineComponent implements OnInit {

  // tslint:disable-next-line:typedef-whitespace
  persons : Person[];
  url: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/gregory032c4c3.jpg';
  constructor(  private route: ActivatedRoute,
    // tslint:disable-next-line:align
    private router: Router,
    // tslint:disable-next-line:align
    private dataService: DataService) { }

  ngOnInit(): void {
    this.refreshPersons();
  }

  refreshPersons() {
    this.dataService.retrievePersons().subscribe(
      response => {
        console.log(response);
        this.persons = response;
      }
    );
  }
}
