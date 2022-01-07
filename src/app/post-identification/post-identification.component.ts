import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-identification',
  templateUrl: './post-identification.component.html',
  styleUrls: ['./post-identification.component.css']
})
export class PostIdentificationComponent implements OnInit {

   id: number = 0;
   username: string = "";
   type: string = "";
   var: string = "";


  constructor(private route: ActivatedRoute) { }
   id2: any;

  ngOnInit(): void {
    

    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.username = this.route.snapshot.paramMap.get('username')!;

    this.type = this.route.snapshot.queryParamMap.get('type')!;
    this.var = this.route.snapshot.queryParamMap.get('var')!;
    console.log('Type = '+this.type + ' | Var = '+this.var);
      
  }

}
