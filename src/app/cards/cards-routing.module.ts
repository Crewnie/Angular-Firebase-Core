import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedCardsComponent } from './advanced/advanced-cards.component';

const routes: Routes = [
    {
        path: '',
        component: AdvancedCardsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CardsRoutingModule { }
