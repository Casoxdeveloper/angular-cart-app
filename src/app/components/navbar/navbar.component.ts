import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'navbar',
  imports: [],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  @Input() cartItems: CartItem[] = [];

  // Step 1: Create an EventEmitter
  @Output() toggleCartEmitter = new EventEmitter<void>();

  // Step 2: Emit the event when the button is clicked
  setShowCart(): void {
    this.toggleCartEmitter.emit();
  }
}
