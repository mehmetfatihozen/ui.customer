import {NgModule} from '@angular/core';
import {MainContentComponent} from "src/app/components/main-content/main-content.component";
import {CommonModule, DecimalPipe} from "@angular/common";
import {RouterModule} from "@angular/router";
import {OnlyNumberDirective} from "src/app/directives/only-number.directive";
import {NgxSmartModalModule} from "ngx-smart-modal";
import {CurrencyMaskInputMode, NgxCurrencyModule} from "ngx-currency";
import {SafePipe} from "src/app/pipes/safe.pipe";
import {ListComponent} from "../../components/list/list.component";

export const customCurrencyMaskConfig = {
  thousands: ".",
  decimal: ",",
  precision: 2,
  prefix: "",
  suffix: "",
  align: "left",
  allowNegative: false,
  allowZero: true,
  nullable: true,
  inputMode: CurrencyMaskInputMode.NATURAL,
};

@NgModule({
  declarations: [
    MainContentComponent,
    OnlyNumberDirective,
    SafePipe,
    ListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxSmartModalModule.forRoot(),
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
  ],
  exports: [
    MainContentComponent,
    OnlyNumberDirective,
    SafePipe,
    NgxCurrencyModule,
    ListComponent,
  ],
  providers: [DecimalPipe]
})

export class SharedModule {
}
