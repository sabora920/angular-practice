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
  hobbies: string[];
  posts: Post[];
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
    this.hobbies = ['coding', 'fishing', 'snowboarding', 'hiking']
    this.dataservice.getPosts().subscribe(posts => {
      this.posts = posts
    });
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

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}