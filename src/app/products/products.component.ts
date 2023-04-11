import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  numbers: number[] = [1, 3, 5];

  productList: Product[] = [
    {
      productId: 101,
      productName: 'sofa',
      productCode: 'sof7182',
      releaseDate: '12-12-2022',
      price: 1000,
      description: 'sofa cum bed',
      thumbRating: 4.3,
      imageUrl: '/sofa/101',
    },
    {
      productId: 103,
      productName: 'sofa',
      productCode: 'sof4582',
      releaseDate: '12-2-2022',
      price: 2000,
      description: 'sofa cum bed type 3',
      thumbRating: 4.1,
      imageUrl: '/sofa/103',
    },
    {
      productId: 105,
      productName: 'sofa',
      productCode: 'sof718112',
      releaseDate: '12-12-2023',
      price: 1000,
      description: 'sofa cum bed type 3',
      thumbRating: 4.4,
      imageUrl: '/sofa/105',
    },
  ];
}
