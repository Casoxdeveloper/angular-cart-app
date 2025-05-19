import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CatalogComponent } from '../catalog/catalog.component';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../models/cartItem';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'cart-app',
  imports: [CatalogComponent, CartComponent,NavbarComponent],
  templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit {
  products: Product[] = [];
  cartItems: CartItem[] = [];
  total: number = 0;
  showCart:boolean=false;

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.products = this.service.getProducts();
    this.cartItems=JSON.parse(sessionStorage.getItem('cart')|| '[]');
    this.calculateTotal();
  }

  handleProductAdded(product: Product) {
    const existingItem = this.cartItems.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      // existingItem.quantity += 1;
      this.cartItems = this.cartItems.map((item) => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    } else {
      // this.cartItems.push({
      //   product: product,
      //   quantity: 1,
      // });
      this.cartItems = [
        ...this.cartItems,
        { product: { ...product }, quantity: 1 },
      ];
    }
        this.saveSession();
       this.calculateTotal();
  }

  removeItemFromCart(item: CartItem): void {
    this.cartItems = this.cartItems.filter(
      (i) => i.product.id !== item.product.id
    );
       this.saveSession();
       this.calculateTotal();
  }

  updateItemQuantity(updatedCartItems:CartItem[]):void{
    this.cartItems=updatedCartItems;
    this.saveSession();
    this.calculateTotal();
  }

  calculateTotal(): number {
    this.total = this.cartItems.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
    return this.total;
  }

  saveSession():void{
    sessionStorage.setItem('cart',JSON.stringify(this.cartItems));
  }

  setShowCart():void{
    this.showCart=!this.showCart;
  }

}
