import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckCreationComponent } from './components/deck-creation/deck-creation.component';
import { DeckEditorComponent } from './components/deck-editor/deck-editor.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'create-deck',
    component: DeckCreationComponent,
  },
  {
    path: 'edit-deck/:id',
    component: DeckEditorComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
