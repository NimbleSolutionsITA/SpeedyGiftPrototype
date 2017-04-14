import { Injectable } from '@angular/core';

@Injectable()
export class FiltriService {
  getFiltri() {
    return [
      {
        label: 'Brand',
        list: ['Nike', 'Adidas', 'Reebok', 'Lacoste', 'Fred Perry', 'Ralph Lauren']
      },
      {
        label: 'Colore',
        list: ['green', 'blu', 'red', 'grey', 'yellow', 'purple', 'beige', 'orange']
      },
      {
        label: 'Taglia',
        list: ['XXL', 'XL', 'Large', 'Medium', 'Small', 'XS']
      },
      {
        label: 'Prezzo',
        list: ['€']
      },
      {
        label: 'Ordina',
        list: ['ASC', 'DSC']
      }
    ];
  }
}
