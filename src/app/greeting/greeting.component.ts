import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
msg:string="Welcome to greeting component";
textColor="text-color";
textBkColor="text-bkcolor";

greetingStyle=[
  this.textColor,
  this.textColor
]
Toggle=false;
toggleColor(){
  this.Toggle=!this.Toggle;
}
fgColor(){
  if(this.Toggle)
  return 'red'
  else
  return 'blue'
}
bgColor(){
  if(this.Toggle)
return 'blue'
else 
return 'red' 
}

  constructor() { }
 
  ngOnInit() {
  }

sayGreet(event) {
  console.log(event);
this.msg="Good Morning"+event.type+""+event.target+""+event.target.value;
}
}