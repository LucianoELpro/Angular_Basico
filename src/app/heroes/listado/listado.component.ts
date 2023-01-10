import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

 public Heroes : string [] = ['Superman','Batman','Spiderman','Aquaman'];
 public MostrarHeroe : string = '';
  BorrarHeroe():void {
    
    this.MostrarHeroe = this.Heroes.shift() || '';

  }
  

}
