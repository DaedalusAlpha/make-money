import { Component } from '@angular/core';
import { Coin } from './coin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'make-money';
  denominations: Coin[] = [
    { name: 'dollar', amount: 1, width: 104.3 },
    { name: 'half dollar', amount: 0.5, width: 120.5 },
    { name: 'quarter', amount: 0.25, width: 95.5 },
    { name: 'dime', amount: 0.1, width: 70.5 },
    { name: 'nickel', amount: 0.05, width: 80.5 },
    { name: 'penny', amount: 0.01, width: 75 },
  ];
  totalCoins: Coin[] = [];
  quantity: number = 3;
  currentCoin: string = 'dollar';

  //Function to add the selected coin a number of times
  //equal to the user's selection to totalCoins
  addMoney(): void {
    for (let c = 0; c < this.quantity; c++) {
      this.totalCoins.push(
        this.denominations[
          this.denominations.findIndex((d) => d.name === this.currentCoin)
        ]
      );
    }
  }

  //Function to remove a coin from the totalCoins array by its index.
  removeMoney(i: number): void {
    this.totalCoins.splice(i, 1);
  }

  //Function to sum all the amounts in the totalCoins array.
  sumMoney(): number {
    return this.totalCoins.reduce((sum, c) => sum + c.amount, 0);
  }

  startOver(): void {
    this.totalCoins = [];
  }
}
