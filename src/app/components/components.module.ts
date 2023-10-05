import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';

import { ComponentsComponent } from './components.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { TemploComponent } from './templo/templo.component';
import { BrindisComponent } from './brindis/brindis.component';
import { AsadoComponent } from './asado/asado.component';
import { TrasmisionComponent } from './trasmision/trasmision.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
        MatListModule
    ],
    declarations: [
        ComponentsComponent,
        NoFoundComponent,
        TemploComponent,
        BrindisComponent,
        AsadoComponent,
        TrasmisionComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
