import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CampaignDetailComponent} from "./campaign-detail.component";
import {SharedModule} from "../../../modules/shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {NgxSmartModalModule} from "ngx-smart-modal";
import {FormsModule} from "@angular/forms";
import {AngularEditorModule} from "@kolkov/angular-editor";

const routes: Routes = [
    {
        path: '', component: CampaignDetailComponent
    }
]

@NgModule({
    declarations: [
        CampaignDetailComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot(),
    FormsModule,
    AngularEditorModule,
  ]
})

export class CampaignDetailModule {
}
