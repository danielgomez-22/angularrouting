import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
//librerias para los parametros
import {ActivatedRoute} from "@angular/router";
import {Params} from "@angular/router";
import {Router} from "@angular/router";


@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})
export class NumeroDobleComponent implements OnInit {
  public numero!: number;
  public doble: number;

  // es donde recibimmos los objetos inyectados de la url
  constructor(private _activeroute: ActivatedRoute, private _route: Router, private _cdr: ChangeDetectorRef) {
    this.doble = 0;
  }
  
  redirect(num:number): void {
    this._route.navigate(['/doble', num]);
  }

  goToHome(): void {
    this._route.navigate(['/']);
  }

  ngOnInit(): void {
    // aqui nos subscribimos a la recuperacion de los parametros
    this._activeroute.params.subscribe((parametros: Params) => {
      //dentro de params es donde recibimo los parametros por su :name
      // la sintaxis es parametros['nombreParametro']
      //e lparaemtro es opcional por eso preguntamos

      if (parametros ['numero'] != null ){
        // los parametros siempre son string
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
        this._cdr.detectChanges();
      }
  })
}
}