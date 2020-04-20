import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
//styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private parametro:ActivatedRoute) { 
    parametro.params.subscribe(parametro =>{
      console.log('Ruta padre');
      console.log(parametro);
    })
  }

  ngOnInit(): void {
  }

}
