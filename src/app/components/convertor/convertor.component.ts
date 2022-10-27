import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'app-convertor',
  templateUrl: './convertor.component.html',
  styleUrls: ['./convertor.component.scss']
})
export class ConvertorComponent implements OnInit {

  optionsArray: string[] = [];

  currencyFrom = '';
  currencyTo = '';

  exchangeRate = 0;

  fromAmount = 0;
  toAmount = 0;

  amountFromOrTo = true;


  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getOptions().subscribe(currency => {
      this.optionsArray = [currency.base, ...Object.keys(currency.rates)];
      // @ts-ignore
      this.exchangeRate = currency.rates[Object.keys(currency.rates)[0]];

      this.currencyFrom = currency.base;
      this.currencyTo = Object.keys(currency.rates)[0];
    })
  }

  selectFromOption(value:string) {
    this.currencyFrom = value;
    console.log(this.currencyFrom)
  }
  selectToOption(value:string) {
    this.currencyTo = value;
    console.log(this.currencyTo)
  }

  handleFromChangeAmount(value: string) {
    this.fromAmount = parseFloat(value);
    this.amountFromOrTo = true;
  }
  handleToChangeAmount(value: string) {
    this.toAmount = parseFloat(value);
    this.amountFromOrTo = false;
  }

  convertValue() {
    this.currencyService.getSpecificCourse(this.currencyFrom, this.currencyTo).subscribe(curr => {
      // @ts-ignore
      this.exchangeRate = curr.rates[this.currencyTo];
      if (this.currencyFrom != "" && this.currencyTo != "") {


        if (this.amountFromOrTo) {
          this.toAmount = parseFloat((this.fromAmount * this.exchangeRate).toFixed(3));
        } else {
          this.fromAmount = parseFloat((this.toAmount / this.exchangeRate).toFixed(3));
        }
      }
    })

  }

}
