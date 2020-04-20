import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private parametro:ActivatedRoute) { 
    this.parametro.parent.params.subscribe(parametro =>{
      console.log('Ruta junior');
      console.log(parametro);
    })
  }

  ngOnInit(): void {
  }

}
