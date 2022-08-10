import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CardModel } from 'src/app/models/decks.models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DeckEditorService {
  private apiURL = 'https://jsonplaceholder.typicode.com/todos/1'

  constructor(
    private http: HttpClient
  ) { }

  getCards(id: string): Observable<CardModel[]> {
    return this.http.get<CardModel[]>(this.apiURL)
    .pipe(tap(console.log))
  }
}
