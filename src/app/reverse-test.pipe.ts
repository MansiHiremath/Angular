import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseTest'
})
export class ReverseTestPipe implements PipeTransform {

  transform(value: string): string {
    let revStr="";
    for(let i=value.length-1;i>=0;i--){
      revStr+=value.charAt(i);
    }
    return revStr;
  }

}
