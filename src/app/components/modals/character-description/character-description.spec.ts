import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { CharacterDescription } from './character-description';
import { CharacterResult } from '../../../models/characters-models';

describe('CharacterDescription', () => {
  let component: CharacterDescription;
  let fixture: ComponentFixture<CharacterDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDescription],
      providers: [
        { provide: DialogRef, useValue: { close: () => {} } },
        { provide: DIALOG_DATA, useValue: {
            id: 1,
            name: 'Rick Sanchez',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            status: 'Alive',
            gender: 'Male',
            species: 'Human',
            origin: { name: 'Earth' },
            location: { name: 'Earth' }
          } as CharacterResult}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDescription);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('deberia crear el modal con la data del caracter ', () => {
    expect(component).toBeTruthy();
  });
});
