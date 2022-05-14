import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CampaignListComponent} from "./campaign-list.component";
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from 'src/app/modules/shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {NgxSmartModalModule} from "ngx-smart-modal";

const routes: Routes = [
    {
        path: '', component: CampaignListComponent
    }
]

@NgModule({
    declarations: [
        CampaignListComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        HttpClientModule,
        NgxSmartModalModule.forRoot(),
    ]
})

export class CampaignListModule {
}
