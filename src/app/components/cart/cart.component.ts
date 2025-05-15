import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cart',
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']


})
export class CartComponent {

 @Input() cartItems: CartItem[]=[];
 @Output() cartUpdated=new EventEmitter<CartItem[]>();
 @Output() itemForRemoved=new EventEmitter<CartItem>();
 @Output() itemQuantityUpdated=new EventEmitter<CartItem>();
 


 updateQuantity(item:CartItem,newQuantity:number):void{
  // Validate input
  const quantity=Math.max(1,Number(newQuantity));
  // Update the item
  const updatedItem={...item,quantity};
  // Update the array
  this.cartItems=this.cartItems.map(i=>i.product.id===updatedItem.product.id?updatedItem:i);
  // Emit change to parent component
  this.cartUpdated.emit(this.cartItems);


  // item.quantity=newQuantity;
  // if(item.quantity<=0){
  //   this.cartItems=this.cartItems.filter(i=>i!==item);

  // }
  // else{
  //   this.cartItems=this.cartItems.map(i=>i===item?item:i);
  // }
 }
 increaseQuantity(item:CartItem):void{
  //Update the item
  const updatedItem={...item,quantity:item.quantity+1};
  //Update the array
  this.cartItems=this.cartItems.map(i=>i.product.id===updatedItem.product.id?updatedItem:i);
  //Emit change to parent component
  this.cartUpdated.emit(this.cartItems);
 }

 decreaseQuantity(item:CartItem):void{
  //Update the item
  const updatedItem={...item,quantity:item.quantity-1};
  //Update the array
  this.cartItems=this.cartItems.map(i=>i.product.id===updatedItem.product.id?updatedItem:i);
  //Emit change to parent component
  this.cartUpdated.emit(this.cartItems);
 }

 removeItem(item:CartItem):void{
  console.log("Emitting remove item event");
  this.itemForRemoved.emit(item);

 }

}
