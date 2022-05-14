import {NgModule, LOCALE_ID} from '@angular/core';
import localeTR from '@angular/common/locales/tr';
import {registerLocaleData} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from 'ngx-toastr';
import {DefaultLayoutComponent} from "./layouts/default-layout/default-layout.component";
import {HeaderComponent} from './components/header/header.component';
import {LoginComponent} from './screens/login/login.component';

registerLocaleData(localeTR);

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DefaultLayoutComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
    ],
    exports: [],
    providers: [{provide: LOCALE_ID, useValue: 'tr-TR'}],
    bootstrap: [AppComponent]
})

export class AppModule {
}
