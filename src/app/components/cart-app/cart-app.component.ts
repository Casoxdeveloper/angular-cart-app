import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CatalogComponent } from '../catalog/catalog.component';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart-app',
  imports: [CatalogComponent, CartComponent],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit {
  products: Product[] = [];
  cartItems: CartItem[] = [];

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.products = this.service.getProducts();
  }

  handleProductAdded(product: Product) {
    const existingItem = this.cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      // this.cartItems.push({
      //   product: product,
      //   quantity: 1,
      // });
      this.cartItems=[...this.cartItems,{product:{...product},quantity:1}]
    }
  }

  removeItemFromCart(item: CartItem): void {
    this.cartItems = this.cartItems.filter(
      (i) => i.product.id !== item.product.id
    );
  }
}
