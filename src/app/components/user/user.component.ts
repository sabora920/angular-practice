import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  address: Address;
  hobbies: string[];

  constructor() { }

  ngOnInit() {
    this.name = "Ryan Sabo"
    this.age = 27
    this.address = {
      street: '2116 Mystic Cove Dr',
      city: 'Virginia Beach',
      state: 'VA'
    }
    this.hobbies = ['coding', 'fishing', 'snowboarding', 'hiking']
  }

  onClick(){
    this.hobbies.push('new hobby')
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby)
    return false;
  }

  deleteHobby(hobby){
    for(let i=0; i<this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1)
      }
    }
  }
}

interface Address {
  street: string,
  city: string,
  state: string
}

