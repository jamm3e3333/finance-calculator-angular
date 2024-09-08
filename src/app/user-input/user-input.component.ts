import {Component, inject, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {
  InvestmentCalculatorService
} from "../service/investment-calcualator.service";
import {AnnualData} from "../model/annual-data.interface";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initInvestment = signal('0');
  annualInvestment = signal('0');
  expectedReturn = signal('0');
  duration = signal('0');

  investmentCalculatorService = inject(InvestmentCalculatorService);
  addAnnualData = output<AnnualData[]>()

  onSubmitCalculation(): void {
    const annualData = this.investmentCalculatorService.calculateInvestment(
      Number(this.initInvestment()),
      Number(this.annualInvestment()),
      Number(this.expectedReturn()),
      Number(this.duration()),
    );

    this.addAnnualData.emit(annualData);
  }
}
