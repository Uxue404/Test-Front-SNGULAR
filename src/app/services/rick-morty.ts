import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterPage } from '../models/characters-models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickMorty {
  url: string = 'https://rickandmortyapi.com/api/character';
  private http = inject(HttpClient);

  getCharacterPage(page: number): Observable<CharacterPage> {
    return this.http.get<CharacterPage>(`${this.url}/?page=${page}`);
  }
}
