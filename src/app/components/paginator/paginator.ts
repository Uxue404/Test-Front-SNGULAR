import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginator.html',
  styleUrl: './paginator.css',
})
export class Paginator {
  currentPage = input<number>(1);
  totalPages = input<number>(100);
  previousPage = output();
  nextPage = output();
}
