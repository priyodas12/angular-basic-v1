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

  showProductDetails(product: Product) {
    product.productDetailsIndicator = !product.productDetailsIndicator;
    console.log(product.productDetailsIndicator, product.productId);
  }

  productList: Product[] = [
    {
      productId: 101,
      productName: 'sofa',
      productCode: 'sof7182',
      releaseDate: '04-07-2017',
      price: 1000,
      description: 'sofa cum bed',
      thumbRating: 4.3,
      imageUrl: '/sofa/101',
      isAvl: true,
      productDetailsIndicator: false,
    },
    {
      productId: 103,
      productName: 'sofa',
      productCode: 'sof4582',
      releaseDate: '01-09-2020',
      price: 2000,
      description: 'sofa cum bed type 3',
      thumbRating: 4.1,
      imageUrl: '/sofa/103',
      isAvl: false,
      productDetailsIndicator: false,
    },
    {
      productId: 105,
      productName: 'sofa',
      productCode: 'sof718112',
      releaseDate: '12-06-2023',
      price: 1000,
      description: 'sofa cum bed type 3',
      thumbRating: 4.4,
      imageUrl: '/sofa/105',
      isAvl: true,
      productDetailsIndicator: false,
    },
  ];
}
