import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import * as http from "http";
import {Observable} from "rxjs";
import {ICurrency} from "../models/currency";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  private myHeaders = new HttpHeaders().set("apikey", "10nemMV8bvcLpMP3XK0AQdsSwJVGqCBQ");

  private optionsRequired = {
    redirect: "follow",
    headers: this.myHeaders,
  }

  getOptions(): Observable<ICurrency> {
    return this.http.get<ICurrency>('https://api.apilayer.com/exchangerates_data/latest?symbols=USD%2C%20EUR%2C%20GBP%2C%20PLN&base=UAH', this.optionsRequired);
  }

  getSpecificCourse(base: string, to:string): Observable<ICurrency> {
    return this.http.get<ICurrency>(`https://api.apilayer.com/exchangerates_data/latest?symbols=${to}&base=${base}`, this.optionsRequired)
  }


}
