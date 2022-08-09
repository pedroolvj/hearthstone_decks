import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModel, DecksModel, UserDecksModel } from 'src/app/models/decks.models';
import { v4 as uuid } from 'uuid'
@Component({
  selector: 'app-deck-creation',
  templateUrl: './deck-creation.component.html',
  styleUrls: ['./deck-creation.component.scss']
})
export class DeckCreationComponent implements OnInit {

  newDeck: FormGroup = new FormGroup({})
  userDecks: UserDecksModel = new UserDecksModel

  classList: Array<{name: string, value: string}> = [
    {name: 'Druida', value: 'druid'},
    {name: 'Mago', value: 'mage'},
    {name: 'Paladino', value: 'paladin'},
    {name: 'Caçador', value: 'hunter'}
  ]
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUserDecks()
    this.createDeck(new DecksModel)
  }

  getUserDecks(): void {
    this.userDecks.decks = JSON.parse(localStorage.getItem('decks') || '[]')
  }

  createDeck(deck: DecksModel): void {
    this.newDeck = this.formBuilder.group({
      id: [deck.id, Validators.required],
      cards: [deck.cards],
      deck_name: [deck.deck_name, Validators.required],
      deck_class: [deck.deck_class, Validators.required]
    })

    this.newDeck.controls['id'].setValue(uuid())
  }

  onSubmit(): void {
    console.log(this.newDeck.value)

    if(this.newDeck.valid) {
      this.userDecks.decks.push(this.newDeck.value)
      localStorage.setItem('decks', JSON.stringify(this.userDecks.decks))
    
      this.router.navigate(['/edit-deck'])
    }
  }
}
