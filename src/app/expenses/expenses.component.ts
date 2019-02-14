import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense'

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  expenses: Expense[] = [
    { name: "Weed",
      id: 1,
      totalSum: 1000,
      categoryID: 0,
      categoryName: "Fun and Pleasures",
      payments: 1
    }
]
  constructor() { }

  ngOnInit() {
  }

}
