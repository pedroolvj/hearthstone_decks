import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecksModel, UserDecksModel } from 'src/app/models/decks.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  userDecks: UserDecksModel = new UserDecksModel
  newDeck: DecksModel = new DecksModel

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDecks()
  }

  getDecks(): void {
    this.userDecks.decks =  JSON.parse(localStorage.getItem('decks') || '[]')
  }

  createDeck(): void {
    this.router.navigate(['/create-deck'])
  }

  editDeck(id: string): void {
    this.router.navigate([`/edit-deck/${id}`])
  }

}
