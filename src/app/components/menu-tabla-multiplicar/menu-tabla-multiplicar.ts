import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-tabla-multiplicar',
  standalone: false,
  styleUrl: './menu-tabla-multiplicar.css',
  templateUrl: './menu-tabla-multiplicar.html',
})
export class MenuTablaMultiplicar implements OnInit {
  // Array para almacenar los 5 números que vienen por la ruta
  public numerosTablas: number[] = [];
  
  // Array con los multiplicadores del 1 al 10
  public multiplicadores: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Capturamos los 5 parámetros de la ruta (:id1, :id2, :id3, :id4, :id5)
    this.route.params.subscribe(params => {
      if (params['id1']) {
        this.numerosTablas = [
          +params['id1'],
          +params['id2'],
          +params['id3'],
          +params['id4'],
          +params['id5']
        ];
      }
    });
  }

  // Método opcional por si quieres generar los números desde el componente
  generarTablasAleatorias(): void {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    const n3 = Math.floor(Math.random() * 10) + 1;
    const n4 = Math.floor(Math.random() * 10) + 1;
    const n5 = Math.floor(Math.random() * 10) + 1;

    this.router.navigate(['/tabla', n1, n2, n3, n4, n5]);
  }
}