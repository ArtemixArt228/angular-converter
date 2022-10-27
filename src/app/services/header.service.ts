import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPrivat} from "../models/currency";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) {
  }

  getCurrentCourse(): Observable<IPrivat[]> {
    return this.http.get<IPrivat[]>('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11');
  }
}
