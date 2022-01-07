import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];
  post = {
    id:0,
    title: '',
    body: '',
    userId: ''
  };
  

  constructor(public postService : PostService) {
    

   }

  ngOnInit(): void {
    this.getPosts();

  } 


  getPosts(){
    this.postService.getAll()
      .subscribe(response => {
        this.posts = response;
        console.log(response)
      }, (error: Response) => {
        alert('erreur innatendu ');
        console.log(error)
      })
  }

  test:any;
  statusButton = true;

  creatPost(){
    this.postService.add(this.post)
      .subscribe(res => {
        console.log(res)

        this.test = res;
        this.post.id = this.test.id;
        this.posts.unshift(this.post);
     

        //this.posts.push(this.post);
        
        this.initPost();

        
        console.log(res);
      }, (error: Response) => {
        (error: AppError) => {
          if(error instanceof NotFoundError){
            alert('Probleme NotFoundError');
          }
          else alert('Probleme Alert');
     
        }
        })
  }


  editPost(post:any){
    this.post = post;
    this.statusButton = false;
  }

  updatePost(){

    this.postService.update(this.post)
    .subscribe(res =>{
      this.initPost();
      this.statusButton = true;

    }, (error: AppError) => {
      if(error instanceof NotFoundError){
        alert('Probleme NotFoundError');
      }
      else alert('Probleme Alert');
 
    }
    )

  }

  initPost(){
    this.post = {
      id:0,
      title: '',
      body: '',
      userId: ''
    };
  }

  status: any;

  deletePost(post:any){
    //post = 155;
    this.postService.delete(post)
    .subscribe( (response) =>  {
      
        console.log('Suppression correcte')
        console.log(response)
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    }, (error: AppError) => {
      if(error instanceof NotFoundError){
        alert('Ce post est deja supprimeé ');
      }
      
    })
  }



}
