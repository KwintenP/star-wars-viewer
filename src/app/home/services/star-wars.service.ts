import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {StarWarsCharacter} from "../entities/star-wars-character.entity";
import {Observable} from "rxjs";

@Injectable()
export class StarWarsService {

  constructor(private http: Http) { }

  public getCharacters(): Observable<StarWarsCharacter> {
    return this.http.get('https://swapi.co/api/people')
      .map((response: Response) => response.json().results);
  }
}
