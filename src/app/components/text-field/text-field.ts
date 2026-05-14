import { Component, OnDestroy, OnInit, output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-text-field',
  imports: [],
  templateUrl: './text-field.html',
  styleUrl: './text-field.css',
  standalone: true
})
export class TextField implements OnInit, OnDestroy {
  valueTextField = output<string>()
  emitValueTextField = new Subject<string>()

  ngOnInit() {
    this.emitValueTextField.pipe(
      debounceTime(300),
    ).subscribe(value => {
      this.valueTextField.emit(value)
    })
  }

  ngOnDestroy() {
    this.emitValueTextField.complete()
  }

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.emitValueTextField.next(value);
  }


}
