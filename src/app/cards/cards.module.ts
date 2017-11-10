import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from '../shared/directives/match-height.directive';

import { AdvancedCardsComponent } from './advanced/advanced-cards.component';

@NgModule({
    imports: [
        CommonModule,
        CardsRoutingModule,
        NgxChartsModule,
        NgbModule,
        MatchHeightModule
    ],
    declarations: [
        AdvancedCardsComponent
    ]
})
export class CardsModule { }
