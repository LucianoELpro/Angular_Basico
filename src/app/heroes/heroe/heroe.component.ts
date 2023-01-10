import { Component } from '@angular/core';



@Component({

    selector:'app-heroe',
    templateUrl:'heroe.component.html'
    
})

export class HeroeComponent{

    public nombreHeroe : string = 'Iroman';
    public Edad : number = 45;


    ObtenerNombre() : string{

        return `${this.nombreHeroe} - ${this.Edad}`;

    }
   get ObtenerNombreCapitalizado(){

    return this.nombreHeroe.toUpperCase();
   }
    
   CambiarNombre() : void{

    this.nombreHeroe = 'Spiderman';

    }
    CambiarEdad() : void{

       this.Edad = 15;
    
     }


}
