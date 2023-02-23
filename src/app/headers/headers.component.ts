import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css'],
})
export class HeadersComponent implements OnInit {
  slogan: string = 'Shpping Window for a common citizen';
  products: string[] = ['sofa', 'TV', 'Bed', 'Wrodrobe'];
  product: string = '';
  productPrice: number = 0;
  randomPrice: any;
  imgSource: string = '/assets/shopping.png';

  ngOnInit() {
    // this.getPrice();
    // this.randomPrice = setInterval(() => {
    //   this.getPrice();
    // }, 1000);
  }

  getPrice() {
    this.product =
      this.products[Math.floor(Math.random() * this.products.length)];
    this.productPrice = Math.floor(Math.random() * 100000);
    return this.product + '  : ' + this.productPrice;
  }
}
