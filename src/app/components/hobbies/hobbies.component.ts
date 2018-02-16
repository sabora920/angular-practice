import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  hobbies: string[];
  hobby: string;

  constructor() { }

  ngOnInit() {
    this.hobbies = ['coding', 'fishing', 'snowboarding', 'hiking']    
  }

  onClick(){
    this.hobbies.unshift(this.hobby)
  }

  addHobby(){
    this.hobbies.unshift(this.hobby)
  }

  deleteHobby(hobby){
    for(let i=0; i<this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1)
      }
    }
  }
}
