import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APP-angular5';

  coursesFor:any;

  personne : any =  {
    nom : 'Taoufiq boughnam',
    tel: '0718183993',
    adresse : {
      ville: 'laayoune g',
      code: 9191919
    }
  }

  loadCourses(){
    this.coursesFor = [
      {id: 1, title: "Laravel"},
      {id: 2, title: "Angular"},
      {id: 3, title: "Spring Boot"},
      {id: 4, title: "React"},
      {id: 5, title: "Symfony"}
    ];
  }

  trackCourses(index: any, course:any){
    return index ? index : undefined;
  }

  addCourse(){
    this.coursesFor.push({id: 6, title:"NodeJS"});
  }
  deleteCourse(course:any){
    let index = this.coursesFor.indexOf(course);
    this.coursesFor.splice(index, 1);
  }
  UpdateCourse(course:any){
    course.title = "UPDATED";
  }
  

  viewCourse = "Angular";

  courses = ['Laravel','Angular','Symfony'];

  post = {
    title: 'Test from app to Taoufiq',
    isFavorite:true
  }

  onFavoriteChange(args: any){
    console.log('favorite changed !!!! : '+args.newState +' || and '+args.newFavori);
    console.log(args)

  }
}
