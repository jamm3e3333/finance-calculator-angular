import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule, CurrencyPipe} from "@angular/common";
import {UserInputComponent} from "./user-input/user-input.component";
import {
  InvestmentResultsComponent
} from "./investment-results/investment-results.component";
import {HeaderComponent} from "./header/header.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations:[
    AppComponent,
    UserInputComponent,
    InvestmentResultsComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
})
export class AppModule {}
