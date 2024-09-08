import {Component, input} from '@angular/core';
import {AnnualData} from "../model/annual-data.interface";
import {CurrencyPipe, DatePipe} from "@angular/common";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [DatePipe,
    CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  annualData = input<AnnualData[]>([])
}
