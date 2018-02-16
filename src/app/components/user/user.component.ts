import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  address: Address;
  isEdit: boolean = false;  

  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.name = "Ryan Sabo"
    this.age = 27
    this.address = {
      street: '2116 Mystic Cove Dr',
      city: 'Virginia Beach',
      state: 'VA'
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street: string,
  city: string,
  state: string
}
