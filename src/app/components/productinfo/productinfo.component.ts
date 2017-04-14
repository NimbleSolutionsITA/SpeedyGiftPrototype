import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'productinfo',
  templateUrl: 'productinfo.component.html',
  styleUrls: [
    './productinfo.component.css',
    '../../../assets/css/flaticon.css'
  ],
  encapsulation: ViewEncapsulation.None
})

export class ProductInfoComponent {

}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
}

export interface Photo {
  id: string;
  url: string;
}

//Navigation menu array implementing NavMenuItem interface
var PRODUCTS: Product[] = [
  { "id": "1", "name": "Product Name", "brand": "Brand", "price": "129,99€"},
  { "id": "2", "name": "Product Name", "brand": "Brand", "price": "129,99€"},
  { "id": "3", "name": "Product Name", "brand": "Brand", "price": "129,99€"},
  { "id": "4", "name": "Product Name", "brand": "Brand", "price": "129,99€"},
  { "id": "5", "name": "Product Name", "brand": "Brand", "price": "129,99€"}
];

var PHOTOS: Photo[] = [
  {"id": "1", "url": "assets/images/products/prod1-1.jpg"},
  {"id": "1", "url": "assets/images/products/prod1-2.jpg"},
  {"id": "1", "url": "assets/images/products/prod1-3.jpg"},
  {"id": "1", "url": "assets/images/products/prod1-4.jpg"},
  {"id": "2", "url": "assets/images/products/prod2-1.jpg"},
  {"id": "2", "url": "assets/images/products/prod2-2.jpg"},
  {"id": "2", "url": "assets/images/products/prod2-3.jpg"},
  {"id": "2", "url": "assets/images/products/prod2-4.jpg"},
  {"id": "3", "url": "assets/images/products/prod1-1.jpg"},
  {"id": "3", "url": "assets/images/products/prod1-2.jpg"},
  {"id": "3", "url": "assets/images/products/prod1-3.jpg"},
  {"id": "3", "url": "assets/images/products/prod1-4.jpg"},
  {"id": "4", "url": "assets/images/products/prod2-1.jpg"},
  {"id": "4", "url": "assets/images/products/prod2-2.jpg"},
  {"id": "4", "url": "assets/images/products/prod2-3.jpg"},
  {"id": "4", "url": "assets/images/products/prod2-4.jpg"},
  {"id": "5", "url": "assets/images/products/prod2-1.jpg"},
  {"id": "5", "url": "assets/images/products/prod2-2.jpg"},
  {"id": "5", "url": "assets/images/products/prod2-3.jpg"},
  {"id": "5", "url": "assets/images/products/prod2-4.jpg"}
]
