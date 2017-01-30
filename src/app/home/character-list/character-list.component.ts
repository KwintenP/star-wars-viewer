import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {StarWarsCharacter} from "../entities/star-wars-character.entity";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  @Input()
  public characters: Array<StarWarsCharacter>;

  @Output()
  public characterSelected = new EventEmitter<StarWarsCharacter>();

  constructor() { }

  ngOnInit() {
  }

}
