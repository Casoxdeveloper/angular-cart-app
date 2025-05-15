import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCartComponent } from '../product-cart/product-cart.component';

@Component({
  selector: 'catalog',
  imports: [ProductCartComponent],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {
  @Input() products: Product[] = [];
  @Output() addToCart=new EventEmitter<Product>();

  productEmittedToAdd(product: Product) {
    this.addToCart.emit(product);
    console.log('Product added to cart:', product);
  }
}
