import { Component, OnInit } from '@angular/core';
import {StarWarsService} from "../services/star-wars.service";
import {StarWarsCharacter} from "../entities/star-wars-character.entity";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private characters$: Observable<StarWarsCharacter>;
  public character: StarWarsCharacter;

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit() {
    this.characters$ = this.starWarsService.getCharacters();
  }

  public characterClicked(character: StarWarsCharacter): void {
    this.character = character;
  }
}
