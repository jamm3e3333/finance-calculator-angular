import {Component, input} from '@angular/core';
import {AnnualData} from "../model/annual-data.interface";

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  annualData = input<AnnualData[]>([])
}
