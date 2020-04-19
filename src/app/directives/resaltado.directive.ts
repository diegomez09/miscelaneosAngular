import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) { 
    console.log('Directiva llamada');    
  }

  @Input('appResaltado') nuevoColor:string;

  @HostListener('mouseenter') hover(){
    this.cambiarColor(this.nuevoColor);
  }

  @HostListener('mouseleave') nohover(){
    this.cambiarColor('orange');
    }

  private cambiarColor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
