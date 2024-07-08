import { Component, OnInit } from '@angular/core';
import { fruit } from '../shared/fruit-mock';
import { CommonModule } from '@angular/common';
import { CartService } from '../shared/cart.service';
import { Fruits } from '../shared/entities';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit {
  cart: Fruits[]= fruit ;
  panier = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  increaseQuantity(fruit: Fruits) {
    fruit.quantity ++;
  }

  decreaseQuantity(fruit: Fruits) {
    if (fruit.quantity > 0) {
      fruit.quantity --;
    }
  }
  // getTotalQuantity(): number {
  //   return this.cart.reduce((acc, item) => acc + item.quantity, 0);
  // }

  removeFromCart(fruit: Fruits){
    this.cartService.removeFromCart(fruit);
    this.cart = this.cartService.getCart(); // Mettre à jour le panier après la suppression
  }

  getTotalHT(): number {
    return this.cart.reduce((acc, item) => acc + item.prixHT * item.quantity, 0);
  }

  getTotalTTC(): number {
    const totalHT = this.getTotalHT();
    return totalHT * 1.2;
  }
}