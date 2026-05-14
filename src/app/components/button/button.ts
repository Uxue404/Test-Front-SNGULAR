import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  nameIcon = input<string>('favorite');
  labelButton = input<string>();
  isActive = input<boolean>(false);
  clickedButton = output();
}
