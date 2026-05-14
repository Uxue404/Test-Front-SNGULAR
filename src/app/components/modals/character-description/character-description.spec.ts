import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDescription } from './character-description';

describe('CharacterDescription', () => {
  let component: CharacterDescription;
  let fixture: ComponentFixture<CharacterDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDescription],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDescription);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
