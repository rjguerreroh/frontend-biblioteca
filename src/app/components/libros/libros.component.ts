import { Component, OnInit } from '@angular/core';
import { LibroService } from '../../services/libro.service';
import { Libro } from '../../models/libro.model';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros: Libro[] = [];
  filterLibro = "";
  

  constructor(public libroService: LibroService) {}

  ngOnInit() {
    this.libroService.getLibros().subscribe((data: any) => {
      if (!data.ok) console.log("Ocuurrio un error");
      this.libros = data.libros.map((libro: any) => {
        return {
          titulo: libro['titulo'],
          editorial: libro['editorial']['nombre'],
          autor: libro['autor']['nombre'],
          ano: libro['ano'],
          numero_paginas: libro['numero_paginas'],
          genero: libro['genero']
        }
      });
    });
  }

  onFilter(){
    this.libros 
  }

}
