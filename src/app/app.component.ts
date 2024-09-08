import {Component, signal} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {
  InvestmentResultsComponent
} from "./investment-results/investment-results.component";
import {AnnualData} from "./model/annual-data.interface";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ]
})
export class AppComponent {
  annualData = signal<AnnualData[]>([])

  onAddAnnualData(annualData: AnnualData[]) {
    this.annualData.set(annualData);
  }
}
