import { Injectable } from '@angular/core';
import { Fruits } from './entities';
import { fruit } from './fruit-mock';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor() { }

  private fruits: Fruits[] = fruit;


  getFruits(): Fruits[] {
    return this.fruits;
  }
}
