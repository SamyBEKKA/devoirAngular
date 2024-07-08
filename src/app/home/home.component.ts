import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FruitService } from '../shared/fruit.service';
import { Fruits } from '../shared/entities';
import { CartService } from '../shared/cart.service';
import { FormsModule } from '@angular/forms';
import { fruit } from '../shared/fruit-mock';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  fruits: Fruits[] = fruit;

  constructor(private fruitService: FruitService, private cartService: CartService) { }

  ngOnInit(): void {
    this.fruits = this.fruitService.getFruits();
  }

  increaseQuantity(fruit: Fruits) {
    fruit.quantity ++;
  }

  decreaseQuantity(fruit: Fruits) {
    if (fruit.quantity > 0) {
      fruit.quantity --;
    }
  }

  addToCart(fruit: Fruits) {
    this.cartService.addToCart(fruit);
    fruit.quantity = 0;
  }
}
