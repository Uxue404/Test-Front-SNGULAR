import { Component, signal } from '@angular/core';
import { CharacterPage } from './components/character-page/character-page';

@Component({
  selector: 'app-root',
  imports: [CharacterPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('test-front-sngular');
}
