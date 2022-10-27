import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../../services/header.service";
import {IPrivat} from "../../models/currency";
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dollarCourse: IPrivat | undefined;
  euroCourse: IPrivat | undefined;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.getCurrentCourse().subscribe(currency => {
      this.dollarCourse = currency[0];
      this.euroCourse = currency[1];
    })
  }
}
