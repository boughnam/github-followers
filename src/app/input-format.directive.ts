import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el : ElementRef) { }

  @Input('appInputFormat') format: any;

  @HostListener('blur') onBlur(){
   // console.log('On blur !!!');
   let value: string = this.el.nativeElement.value;

   this.el.nativeElement.value = value.toUpperCase();

    if(this.format == "lowercase"){
      this.el.nativeElement.value = value.toLowerCase();

    }
    else{
      this.el.nativeElement.value = value.toUpperCase();

    }

  }

  /* @HostListener('focus') onFocus(){
    console.log('On Focus !!!');

  } */

}
