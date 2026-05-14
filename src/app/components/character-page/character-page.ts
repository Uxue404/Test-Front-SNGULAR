import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RickMorty } from '../../services/rick-morty';
import { CharacterCard } from '../character-card/character-card';
import { CharacterResult } from '../../models/characters-models';
import { TextField } from '../text-field/text-field';
import { Button } from '../button/button';
import { Dialog } from '@angular/cdk/dialog';
import { CharacterDescription } from '../modals/character-description/character-description';
import { Paginator } from '../paginator/paginator';

@Component({
  selector: 'app-character-page',
  imports: [CharacterCard, TextField, Button, Paginator],
  templateUrl: './character-page.html',
  styleUrl: './character-page.css',
  standalone: true,
})
export class CharacterPage implements OnInit {
  currentPage = 1;
  totalPages = 0;
  characterService = inject(RickMorty);
  dialog = inject(Dialog);
  originalList = signal<CharacterResult[]>([]);
  listCharacters = signal<CharacterResult[]>([]);
  favoritesCharacters = signal<CharacterResult[]>([]);
  showFavorites = signal<boolean>(false);

  ngOnInit() {
    this.loadCharacters(this.currentPage);
  }

  loadCharacters(page: number) {
    this.clearList()
    this.characterService.getCharacterPage(page).subscribe((response) => {
      this.totalPages = response.info.pages;
      this.originalList.set(response.results);
      this.listCharacters.set(response.results);
    });
  }

  clearList(): void {
    this.favoritesCharacters.set([])
    this.originalList.set([])
    this.listCharacters.set([])
  }

  onSearch(value: string): void {
    this.findCharacters(value);
  }

  isFavorite(id: number): boolean {
    return this.favoritesCharacters().some((c) => c.id === id);
  }

  findCharacters(value: string): void {
    const currentList = this.showFavorites() ? this.favoritesCharacters() : this.originalList();
    if (!value) return this.listCharacters.set(currentList);

    this.listCharacters.set(
      currentList.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())),
    );
  }

  onAddFavorite(id: number): void {
    const charecter = this.originalList().find((item) => item.id === id);
    if (!charecter) return;
    this.favoritesCharacters.update((list) =>
      list.some((item) => item.id === id)
        ? list.filter((item) => item.id !== id)
        : [...list, charecter],
    );

    if (this.favoritesCharacters().length === 0) {
      this.showFavorites.set(false);
      this.listCharacters.set(this.originalList());
      return;
    }
    if (this.showFavorites()) {
      this.listCharacters.set(this.favoritesCharacters());
    }
  }

  getFavorites() {
    if (this.favoritesCharacters().length === 0) return;
    this.showFavorites.update((value) => !value);

    this.listCharacters.set(
      this.showFavorites() ? this.favoritesCharacters() : this.originalList(),
    );
  }

  openModal(character: CharacterResult) {
    this.dialog.open(CharacterDescription, {
      data: character,
    });
  }

  nextPage(){
    if (this.currentPage < this.totalPages){
      this.currentPage++;
      this.loadCharacters(this.currentPage);
    }
  }

  previousPage(){
    if (this.currentPage > 1){
      this.currentPage--;
      this.loadCharacters(this.currentPage);
    }
  }
}

