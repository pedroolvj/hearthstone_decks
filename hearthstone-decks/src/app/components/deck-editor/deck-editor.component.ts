import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DecksModel, UserDecksModel } from 'src/app/models/decks.models';

@Component({
  selector: 'app-deck-editor',
  templateUrl: './deck-editor.component.html',
  styleUrls: ['./deck-editor.component.scss']
})
export class DeckEditorComponent implements OnInit {

  deckId: string = ''
  userDecks: UserDecksModel = new UserDecksModel
  selectedDeck: FormGroup = new FormGroup({})

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createDeck(new DecksModel)
    this.getDeckId()
    this.getDecks()
  }

  createDeck(deck: DecksModel): void {
    this.selectedDeck = this.formBuilder.group({
      id: [deck.id, {disabled: true}],
      cards: [deck.cards],
      deck_name: [deck.deck_name, Validators.required],
      deck_class: [deck.deck_class, Validators.required]
    }, {updateOn: 'submit'}
    )
  }

  getDecks(): void {
    this.userDecks.decks =  JSON.parse(localStorage.getItem('decks') || '[]')

    this.userDecks.decks.forEach(e => {
      if(e.id == this.deckId) {
        this.selectedDeck.controls['id'].setValue(e.id)
        this.selectedDeck.controls['cards'].setValue(e.cards)
        this.selectedDeck.controls['deck_name'].setValue(e.deck_name)
        this.selectedDeck.controls['deck_class'].setValue(e.deck_class)
      }
    })

    console.log(this.selectedDeck.value)
  }

  getDeckId(): void {
    this.route.params.subscribe(params => {
      this.deckId = params.id
    });
  }

}
