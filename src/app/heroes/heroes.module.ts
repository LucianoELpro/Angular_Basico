import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';




@NgModule({

    declarations:[ListadoComponent,HeroeComponent],
    imports:[CommonModule],
    providers:[],
    bootstrap:[ListadoComponent,HeroeComponent],
    exports:[ListadoComponent,HeroeComponent]


})

export class HeroeModule{


}