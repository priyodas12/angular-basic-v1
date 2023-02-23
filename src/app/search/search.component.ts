import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchString: string = '';

  submitSearchHandler(eventData: Event) {
    console.log(eventData);
    const input = eventData.target as HTMLInputElement;
    this.searchString = input.value;
  }
}
