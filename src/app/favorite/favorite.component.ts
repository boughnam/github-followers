import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //inputs: ['isFavorite','isKayan']
})
export class FavoriteComponent implements OnInit {

  //isFavorite : boolean = true; 
  //isKayan: string = "Hada makan";

  @Input('is-fav') isFavorite : boolean = true; 
  @Input('is-kay') isKayan: string = "Hada makan";
  dozHa : string = "";
  @Output('change') click = new EventEmitter;
  onClickSpan(){
    console.log("Avant click : "+this.isFavorite)
    this.isFavorite = !this.isFavorite;
    console.log("Apres click : "+this.isFavorite)

    if(this.isFavorite) this.dozHa = "Dowznaha 3amra +++"
    else this.dozHa = "Dowznaha khawya ---"

    this.click.emit({newState: this.dozHa, newFavori: this.isFavorite});
  }
  constructor() { }

  ngOnInit(): void {
  }

}
