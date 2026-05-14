import { Component, inject, OnInit } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { CharacterResult } from '../../../models/characters-models';
import { TagSeverity } from '../../tag-severity/tag-severity';

@Component({
  selector: 'app-character-description',
  imports: [TagSeverity],
  templateUrl: './character-description.html',
  styleUrl: './character-description.css',
})
export class CharacterDescription implements OnInit {
  dialogRef = inject(DialogRef);
  character = inject<CharacterResult>(DIALOG_DATA);

  ngOnInit() {
    console.log(this.character);
  }
}
