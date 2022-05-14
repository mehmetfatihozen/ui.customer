import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from 'src/app/modules/shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSmartModalModule} from "ngx-smart-modal";
import {HttpClientModule} from "@angular/common/http";
import {AngularEditorModule} from "@kolkov/angular-editor";
import {CampaignFinishComponent} from './campaign-finish/campaign-finish.component';
import {CampaignJoinComponent} from "./campaign-join.component";

const routes: Routes = [
    {path: 'approve', component: CampaignJoinComponent},
    {path: 'finish', component: CampaignFinishComponent},
]

@NgModule({
    declarations: [
        CampaignJoinComponent,
        CampaignFinishComponent,
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AngularEditorModule,
        NgxSmartModalModule.forRoot(),
    ]
})

export class CampaignJoinModule {
}
