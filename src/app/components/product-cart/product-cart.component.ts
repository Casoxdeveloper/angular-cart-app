import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'div[product-cart]',
  imports: [CommonModule],
  templateUrl: './product-cart.component.html',
  styleUrls:['./product-cart.component.css']
})
export class ProductCartComponent {

  @Input() product: Product = new Product();
  // @Output() cartAdd:(product:Product)=>void=()=>{};
  @Output() productEmitted=new EventEmitter<Product>();

  addToCart(product:Product){
    this.productEmitted.emit(product);
  }


}
