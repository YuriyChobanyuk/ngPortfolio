import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const valueDate = new Date().setFullYear(value.split('\.')[2],
      value.split('\.')[1],
      value.split('\.')[0]);
    const resDate = new Date(Date.now().valueOf() - valueDate.valueOf());
    console.log(value);
    return resDate.getFullYear() - 1970;
  }

}
