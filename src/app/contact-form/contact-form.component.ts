import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
 export class ContactFormComponent implements OnInit {

  ContactMethodes = [ {id:1, name : 'SMS'} , {id:2, name : 'PHONE'} ,  {id:3, name : 'EMAIL'} ];
  constructor() { }

  ngOnInit(): void {
  }
  
  log(x:any){
    console.log(x)
  }
  
  submit(f:any){
    console.log(f.value)

  }

}
