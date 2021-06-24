import { Component, OnInit } from '@angular/core';
import { Editorial } from '../../models/editorial.model';
import { EditorialService } from '../../services/editorial.service';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html'
})
export class EditorialesComponent implements OnInit {

  editoriales: Editorial[] = [];

  constructor( private editorialService:EditorialService ) { }

  ngOnInit(): void {
    this.editorialService.getEditoriales().subscribe((data: any) => {
      if (!data.ok) console.log("Ocuurrio un error");
      this.editoriales = data.editoriales.map((editorial: any) => {
        return {
          nombre: editorial['nombre'],
          telefono: editorial['telefono'],
          email: editorial['email'],
          direccion_correspondencia: editorial['direccion_correspondencia'],
          maximo_libros: editorial['maximo_libros']
        }
      });
      console.log("Editoriales", this.editoriales);
    });
  }

}
