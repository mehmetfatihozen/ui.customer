import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultLayoutComponent} from "./layouts/default-layout/default-layout.component";
import {LoginComponent} from './screens/login/login.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'campaigns', pathMatch: 'full'},
    {
        path: '', component: DefaultLayoutComponent,
        children: [
            {
                path: 'campaigns',
                loadChildren: () => import('./screens/campaign-container/campaign-container.module').then(m => m.CampaignContainerModule)
            },
        ]
    },
    {path: '**', redirectTo: 'login'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
