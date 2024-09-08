import {Injectable} from "@angular/core";
import {AnnualData} from "../model/annual-data.interface";

@Injectable({
  providedIn: 'root',
})
export class InvestmentCalculatorService {
  calculateInvestment(initInvestment: number, annualInvestment: number, expectedReturn: number, duration: number): AnnualData[] {
    const annualData: AnnualData[] =  [];
    let investmentValue = initInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const annualEarnedInterest = investmentValue * (expectedReturn / 100);
      investmentValue += annualEarnedInterest + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initInvestment;

      annualData.push({
        year: year,
        interest: annualEarnedInterest,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initInvestment + annualInvestment * year,
        id: String(new Date().getTime() + Math.floor(Math.random()*10000)),
      });
    }

    return annualData;
  }
}
