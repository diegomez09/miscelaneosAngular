import { Component, OnInit, OnChanges, DoCheck, SimpleChanges ,
          AfterContentChecked, AfterContentInit, AfterViewChecked , OnDestroy} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <br>
  <app-css></app-css>
  <br>
  <app-clases></app-clases>
  <br>
  <p [appResaltado]="'yellow'" >Hola mundo</p>
  <app-switch></app-switch>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit
,AfterContentChecked, AfterContentInit , AfterViewChecked, OnDestroy{

  constructor() {
    console.log('constructor');
   }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngSimpleChanges');
    
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck');
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy');
  }
  

}
