import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  maLimite : number | undefined;
  transform(value: string, limite?:number): any {
    if(!value){
      return null;
    }

    else {
      this.maLimite= (limite) ? limite : 30;

      return value.substr(0,this.maLimite) + '....';

    }
  }

}
