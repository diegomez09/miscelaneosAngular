import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styles: [
  ]
})
export class SwitchComponent implements OnInit {

  i:number=0;
  item:string;
  opciones:string[] = ['success','info','warning','danger'];

   cambio(){
     let retorno:number;
    if(this.i >3){
      this.i =0;      
    }
      retorno = this.i
      this.i = this.i+1;    
    console.log(this.opciones[retorno]);
    return this.opciones[retorno];
  }
  constructor() { }

  ngOnInit(): void {
  }

}
