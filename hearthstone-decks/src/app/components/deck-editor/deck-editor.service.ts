import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ServiceModel } from 'src/app/models/decks.models';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DeckEditorService {
  private apiURL = 'https://us.api.blizzard.com/hearthstone/cards?locale=en_US&access_token=US4ZNwPHnb2wJ7n8ZXbl8cpvc7qBxkRZvA&class='

  constructor(
    private http: HttpClient
  ) { }

  getCards(id: string): Observable<ServiceModel> {
    return this.http.get<ServiceModel>(`${this.apiURL}${id}`)
    .pipe(tap(console.log))
  }
}
