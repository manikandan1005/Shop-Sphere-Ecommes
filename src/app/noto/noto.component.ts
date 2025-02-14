import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-noto',
  imports: [CommonModule, FormsModule],
  templateUrl: './noto.component.html',
  styleUrl: './noto.component.scss'
})
export class NotoComponent {
  movies:any=['mani','ram','sam'];
  hi=false;
  uName:string='';
  products =[
    {
      name:'ndjdf',
      id:9293,
      age:'930'
    },
    {
      name:'mfjdf',
      id:92,
      age:'90'
    },{
      name:''
    },{}
  ];
  submitOn(){
    console.log(this.uName)
    this.uName='';
  }
}
 