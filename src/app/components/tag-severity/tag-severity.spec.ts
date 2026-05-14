import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagSeverity } from './tag-severity';

describe('TagSeverity', () => {
  let component: TagSeverity;
  let fixture: ComponentFixture<TagSeverity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagSeverity],
    }).compileComponents();

    fixture = TestBed.createComponent(TagSeverity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
