import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private ele:ElementRef) { }
changeColor(color:string,color1:string){
  this.ele.nativeElement.style.backgroundColor=color;
  this.ele.nativeElement.style.color=color1;

}
@HostListener('mouseenter')
onMouseEnter(){
  this.changeColor('magenta','blue');
}
@HostListener('mouseleave')
onMouseLeave(){
  this.changeColor('black','white');
}
}
