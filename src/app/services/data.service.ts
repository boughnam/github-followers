import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from "rxjs/operators" 
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor( @Inject(String) private url :string, private http: HttpClient) {
   }

  getAll(){
    return this.http.get(this.url)
     .pipe(
      catchError(this.handlerError)
      )
  }

  add(ressource: any){
    return this.http.post(this.url, ressource)
    .pipe(
      catchError(this.handlerError)
      )

  }

  update(ressource: any){
    return this.http.put(this.url + ressource.id , ressource)
    .pipe(
      catchError(this.handlerError)
      )
  }

  delete(ressource: any){
    console.log(this.url + ressource.id)
    //return this.http.delete(this.url + post.id + '/ff')
    return this.http.delete(this.url + ressource.id  )
    .pipe(
      catchError(this.handlerError)
      )
  }

  private handlerError(error: Response){
    if (error.status === 404){
      return throwError(new NotFoundError);
     }
     if (error.status === 400){
      //return throwError(new BadInput);
     }
     if (error.status === 500){
        //return throwError(new BadInput);
       }
     
     return throwError(new AppError);
  }




}
