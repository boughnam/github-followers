import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostIdentificationComponent } from './post-identification/post-identification.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
    { 
        path: "", 
        component: HomeComponent 
    },
    { 
        path: "home", 
        component: HomeComponent 
    },
    { 
        path: "github", 
        component:  GithubFollowersComponent
    },
    { 
        path: "posts", 
        component:  PostsComponent
    },
    { 
        path: "github/:id/:username", 
        component:  PostIdentificationComponent
    },
    { 
        path: "**", 
        component:  PageNotFoundComponent
    },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
