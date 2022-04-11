import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuoteInterface } from  "../../QuoteInterface";
import { QUOTES } from "../../mock-quotes";


@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  
  @Output() onAddQuote: EventEmitter<QuoteInterface> = new EventEmitter();
    text!: string;
    author!: string;
    reminder: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert("Please add a Quote");
      return;
    }

    const newQuote ={
      text: this.text,
      author: this.author,
      reminder: this.reminder,
    }

    this.onAddQuote.emit(newQuote);

    this.text = "";
    this.author = "";
    this.reminder = false;
  }

}
