import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CampaignExpireListComponent} from "./campaign-expire-list.component";
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from 'src/app/modules/shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {NgxSmartModalModule} from "ngx-smart-modal";

const routes: Routes = [
  {
    path: '', component: CampaignExpireListComponent
  }
]

@NgModule({
  declarations: [
    CampaignExpireListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot(),
  ]
})

export class CampaignExpireListModule {
}
