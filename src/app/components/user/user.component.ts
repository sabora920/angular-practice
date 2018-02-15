import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  address: {
    street: string,
    city: string,
    state: string
  }


  constructor() { }

  ngOnInit() {
    this.name = "Ryan Sabo"
    this.age = 27
    this.address = {
      street: '2116 Mystic Cove Dr',
      city: 'Virginia Beach',
      state: 'VA'
    }
  }

}
