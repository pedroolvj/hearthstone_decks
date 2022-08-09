import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckCreationComponent } from './components/deck-creation/deck-creation.component';
import { DeckEditorComponent } from './components/deck-editor/deck-editor.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckCreationComponent,
    DeckEditorComponent,
    ListCardsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
