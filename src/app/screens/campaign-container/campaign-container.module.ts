import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CampaignContainerComponent} from './campaign-container.component';
import {SharedModule} from "../../modules/shared/shared.module";
import {RouterModule, Routes} from '@angular/router';
import {NgxSmartModalModule} from 'ngx-smart-modal';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {
    path: '', component: CampaignContainerComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('./campaign-list/campaign-list.module').then(m => m.CampaignListModule)
      },
      {
        path: 'i-joined',
        loadChildren: () => import('./campaign-i-joined-list/campaign-i-joined-list.module').then(m => m.CampaignIJoinedListModule)
      },
      {
        path: 'my-favorite',
        loadChildren: () => import('./campaign-my-favorite-list/campaign-my-favorite-list.module').then(m => m.CampaignMyFavoriteListModule)
      },
      {
        path: 'expire',
        loadChildren: () => import('./campaign-expire-list/campaign-expire-list.module').then(m => m.CampaignExpireListModule)
      },
      {
        path: 'join/:id',
        loadChildren: () => import('./campaign-join/campaign-join.module').then(m => m.CampaignJoinModule)
      },
      {
        path: 'detail/:id',
        loadChildren: () => import('./campaign-detail/campaign-detail.module').then(m => m.CampaignDetailModule)
      },
    ]
  },
  {path: '**', redirectTo: 'list'}
]

@NgModule({
  declarations: [
    CampaignContainerComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    NgxSmartModalModule.forRoot(),
  ]
})

export class CampaignContainerModule {
}
