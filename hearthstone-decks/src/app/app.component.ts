import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hearthstone-decks';

  constructor(
    private router: Router
  ) {}

  backToHome() {
    this.router.navigate(['/home'])
  }
}
