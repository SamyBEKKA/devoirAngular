import { Injectable } from '@angular/core';
import { Fruits } from './entities';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cart: Fruits[] = [];

  getCart(): Fruits[] {
    return this.cart;
  }

  addToCart(fruit: Fruits) {
    const item = this.cart.find(i => i.name === fruit.name);
    if (item) {
      item.quantity += fruit.quantity;
    } else {
      this.cart.push({ ...fruit });
    }
  }

  updateCart(fruit: Fruits) {
    const index = this.cart.findIndex(i => i.name === fruit.name);
    if (index !== -1) {
      this.cart[index] = fruit;
    }
  }
  removeFromCart(fruit: Fruits) {
    const index = this.cart.findIndex(i => i.name === fruit.name);
    if (index !== -1) {
      this.cart.splice(index, 1); // Supprime l'élément à l'index trouvé
    }
  }
  
}
