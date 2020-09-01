import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'exitstatus'
})
export class ExitstatusPipe implements PipeTransform {

  constructor(private dateSvc:DatePipe){
    
  }

  transform(exitTime?:Date): string {
    if(exitTime){
        return this.dateSvc.transform(exitTime, "medium");
    }else{
      return "Visitor not returned";
    }
  }
}
