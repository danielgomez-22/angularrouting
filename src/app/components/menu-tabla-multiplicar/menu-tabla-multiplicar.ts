import { Component, } from '@angular/core';
import {Params , Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-menu-tabla-multiplicar',
  standalone: false,
  styleUrl: './menu-tabla-multiplicar.css',
  templateUrl: './menu-tabla-multiplicar.html',
})
export class MenuTablaMultiplicar {
 public numeroTabla!: number; // El número que viene de la ruta (la tabla que eligieron)
  public numerorandom: number[] = [];
  public resultadoAleatorio!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Capturamos el parámetro 'id' o como lo hayas nombrado en tu ruta
    this.route.params.subscribe(params => {
      this.numeroTabla = +params['id']; // Asegúrate de que en tu ruta se llame :id o :numero
    });
  }

  generarNumeroRandom(): void {
    // Ejemplo: podrías generar un número aleatorio del 1 al 10 para multiplicarlo por la tabla seleccionada
    this.resultadoAleatorio = Math.floor(Math.random() * 10) + 1;
    this.numerorandom.push(this.resultadoAleatorio);
  }
}
