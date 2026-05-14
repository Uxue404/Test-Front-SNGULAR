import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tag-severity',
  imports: [],
  templateUrl: './tag-severity.html',
  styleUrl: './tag-severity.css',
})
export class TagSeverity {
  type = input<string>('status');   // 👈 'status' | 'gender' | 'species'
  value = input<string>('unknown'); // 👈 'Alive' | 'Female' | 'Human'

  get tagClass(): string {
    switch (this.type()) {           // 👈 switch on TYPE
      case 'status':
        if (this.value() === 'Alive') return 'tag-alive';
        if (this.value() === 'Dead') return 'tag-dead';
        return 'tag-unknown';
      case 'gender':
        if (this.value() === 'Male') return 'tag-male';
        if (this.value() === 'Female') return 'tag-female';
        return 'tag-unknown';
      case 'species':
        return 'tag-species';
      case 'location':
        return 'tag-location';
      default:
        return 'tag-unknown';
    }
  }

  get labelTag(): string {
    const labels: Record<string, string> = {
      'status':   'Status',
      'gender':   'Gender',
      'species':  'Species',
      'location': 'Location',
    };
    return labels[this.type()] ?? '';
  }
}
