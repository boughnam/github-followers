import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }
  body = "My name is Taoufiq Boughnam, from morocco, I am a software engineer ";

  courses = ["Java","Angular","DOTNET"];
  isActive = false;

  course = {
    titre : 'Formation sur Angular 5 Compléte',
    avis : '4.9563',
    Participants : 136,
    prix : 950.38,
    publicationDate : new Date(2017, 11, 22)
  }

  email : string = "toufiq.boughnam@gmail.com";

  onKeyUp(){
      console.log("Email : "+this.email);

  }
  /* onKeyUp(email:any){
    //if($event.keyCode === 13){// 13 OK
      console.log("onKeyUp Angular !");
      console.log("Email : "+email.value);

    //}

  } */

  onClick($event:any){
    $event.stopPropagation();
    console.log("button clicked !");
    console.log($event);

  }

  onClickDiv(){
    console.log("Div clicked !");
  }

  ngOnInit(): void {
  }

}
