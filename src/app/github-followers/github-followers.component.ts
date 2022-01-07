import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any = [];

  constructor(private service: GithubFollowersService) { }

  ngOnInit() {

    console.log(11111111);
         return this.service.getFollowers()
        .subscribe(response => {
          console.log(response);

          this.followers = response;
  });

}


}