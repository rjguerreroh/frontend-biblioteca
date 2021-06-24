import { Component, OnInit } from '@angular/core';
import { AutorService } from '../../services/autor.service';
import { Autor } from '../../models/autor.model';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html'
})
export class AutoresComponent implements OnInit {

  autores: Autor[] = [];

  constructor( private autorService:AutorService ) { }

  ngOnInit(): void {
    this.autorService.getAutores().subscribe((data: any) => {
      if (!data.ok) console.log("Ocuurrio un error");
      console.log('autosss', data);
      this.autores = data.autores.map((autor: any) => {
        return {
          nombre: autor['nombre'],
          telefono: autor['telefono'],
          email: autor['email'],
          fecha_nacimiento: autor['fecha_nacimineto'],
          ciudad: autor['ciudad']
        }
      });
      console.log("autores", this.autores);
    });
  }

}
