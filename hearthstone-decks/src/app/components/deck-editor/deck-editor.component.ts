import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { find } from 'rxjs/operators';
import { CardModel, DecksModel, UserDecksModel } from 'src/app/models/decks.models';
import { DeckEditorService } from './deck-editor.service';

@Component({
  selector: 'app-deck-editor',
  templateUrl: './deck-editor.component.html',
  styleUrls: ['./deck-editor.component.scss']
})
export class DeckEditorComponent implements OnInit {

  deckId: string = ''
  userDecks: UserDecksModel = new UserDecksModel
  selectedDeck: FormGroup = new FormGroup({})
  setAllCards: CardModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private deckEditorService: DeckEditorService
  ) { }

  ngOnInit(): void {
    this.createDeck(new DecksModel)
    this.getDeckId()
    this.getDecks()
    this.getCards()
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
        this.selectedDeck.controls['deck_name'].setValue(e.deck_name)
        this.selectedDeck.controls['deck_class'].setValue(e.deck_class)
        this.selectedDeck.controls['cards'].setValue(e.cards)
      }
    })
  }

  getDeckId(): void {
    this.route.params.subscribe(params => {
      this.deckId = params.id
    });
  }

  onSubmit(): void {
    if(this.selectedDeck.valid) {
      let getIndex = this.userDecks.decks.findIndex(e => e.id == this.deckId)
      this.userDecks.decks[getIndex].deck_name = this.selectedDeck.controls['deck_name'].value

      localStorage.setItem('decks', JSON.stringify(this.userDecks.decks))
    }
  }

  updateDecks(): void {
    let getIndex = this.userDecks.decks.findIndex(e => e.id == this.deckId)
    this.userDecks.decks[getIndex] = this.selectedDeck.value

    localStorage.setItem('decks', JSON.stringify(this.userDecks.decks))
  }

  getCards(): void {
    this.deckEditorService.getCards(this.selectedDeck.controls['deck_class'].value)
    .subscribe((data) => {
      let cards = data.cards

      cards.forEach(element => {
        let card: CardModel = new CardModel

        card.id = element.id
        card.name = element.name
        card.flavorText = element.flavorText
        card.attack = element.attack
        card.health = element.health || element.durability
        card.cardTypeId = element.cardTypeId
        card.image = element.image
        card.class = this.selectedDeck.controls['deck_class'].value
        card.qnty = 0

        this.setAllCards.push(card)
        this.updateDecks()
      })

      this.updateCards()
    })
  }

  updateCards(): void {
    
    let cards: CardModel[] = []

    this.selectedDeck.controls['cards'].value.forEach((element: { id: number, qnty: number }) => {
      let findIndex = this.setAllCards.findIndex(card => card.id == element.id)
      this.setAllCards[findIndex].qnty = element.qnty
      cards.push(this.setAllCards[findIndex])
    })

    this.selectedDeck.controls['cards'].setValue(cards)
  }

  addCard(card: CardModel): void {
    card.qnty++

    let cards: CardModel[] = this.selectedDeck.controls['cards'].value
    cards.push(card)

    this.updateDecks()
  }

  removeCard(card: CardModel): void {
    card.qnty--

    let cards: CardModel[] = this.selectedDeck.controls['cards'].value
    let findIndex = cards.findIndex(e => e.id == card.id)
    
    cards.splice(findIndex, 1)

    this.updateDecks()
  }

}
