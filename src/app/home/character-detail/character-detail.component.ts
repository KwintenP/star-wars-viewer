import {Component, OnInit, Input} from '@angular/core';
import {StarWarsCharacter} from "../entities/star-wars-character.entity";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  @Input()
  private character: StarWarsCharacter;

  constructor() { }

  ngOnInit() {
  }

}
