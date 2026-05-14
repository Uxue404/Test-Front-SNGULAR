import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterPage } from './character-page';
import { CharacterResult } from '../../models/characters-models';
import { expect } from 'vitest';

describe('CharacterPage', () => {
  let component: CharacterPage;
  let fixture: ComponentFixture<CharacterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('deberia de agregar a favoritos', () => {
    component.originalList.set([
      {id: 1, name: 'Rick Sanchez'} as CharacterResult
    ])

    component.onAddFavorite(1)
    expect(component.favoritesCharacters().some(item => item.id === 1)).toBe(true)
  });

  it('deberia filtar personajes por nombre', () => {
    component.originalList.set([
      {id: 1, name: 'Rick Sanchez'} as CharacterResult,
      { id: 2, name: 'Morty Smith' } as CharacterResult,
    ])

    component.listCharacters.set(component.originalList())

    component.onSearch('Rick')
    expect(component.listCharacters().length === 1)
    expect(component.listCharacters()[0].name).toBe('Rick Sanchez');
  });

  it('deberi de pasar a la siguiente pagina', () => {
    component.currentPage = 1
    component.totalPages = 5

    component.nextPage()
    expect(component.currentPage).toBe(2)
  });


  it('no deberia pasar de la ultima pagina', () => {
    component.currentPage = 5
    component.totalPages = 5
    component.nextPage()

    expect(component.currentPage).toBe(5)
  });
});
