import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DecksModel } from 'src/app/models/decks.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  userDecks: Array<DecksModel>[] = JSON.parse(localStorage.getItem('decks') || '[]')
  newDeck: DecksModel = new DecksModel

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  createDeck() {
    this.router.navigate(['/create-deck'])
  }

}
