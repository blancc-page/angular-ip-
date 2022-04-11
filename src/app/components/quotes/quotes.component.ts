import { Component, OnInit } from '@angular/core';
import { QuoteInterface } from 'src/app/QuoteInterface';
import { QUOTES } from 'src/app/mock-quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: QuoteInterface[] = QUOTES;
  constructor() { }

  deleteQuote(quote: QuoteInterface){
  this.quotes = this.quotes.filter(q => q.id !== quote.id);
  }

  toggleReminder(quote: QuoteInterface){
    quote.reminder = !quote.reminder;
  }

  addQuote(quote: QuoteInterface){
  this.quotes.push(quote);
  }

  ngOnInit(): void {
  }

}
