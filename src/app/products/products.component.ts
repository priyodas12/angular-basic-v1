import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  list: number[] = [1, 3, 5];
}
