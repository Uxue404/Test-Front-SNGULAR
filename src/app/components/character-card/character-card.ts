import { Component, input, output } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-character-card',
  imports: [Button],
  templateUrl: './character-card.html',
  styleUrl: './character-card.css',
  standalone: true
})
export class CharacterCard {
  urlImage = input.required<string>();
  nameCharacter = input.required<string>();
  idCharacter = input.required<number>();
  addFavorite = output<number>()
  isFavorite = input<boolean>(false);
  openDetail = output();
}
