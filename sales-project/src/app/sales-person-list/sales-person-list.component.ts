import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.less']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // array of sale person list is created
   salesPersonList: SalesPerson[] =[
    new SalesPerson("Namita","Sehgal","namitasehgal@gmail.com",2345),
    new SalesPerson("Muskaan","Sehgal","muskaansehgal@gmail.com",3452),
    new SalesPerson("Nancy","Sehgal","nancysehgal@gmail.com",1768),
    new SalesPerson("Gagan","Taneja","gagantaneja@gmail.com",3980),
    new SalesPerson("Arun","Bhardwaj","arunbhardwaj@gmail.com",2346),
    new SalesPerson("Paridhi","Bhardwaj","paridhibhardwaj@gmail.com",1111),
  ];

}
