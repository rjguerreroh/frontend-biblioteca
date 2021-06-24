import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultsLibros =[];
    if(arg == '') return value;
    for (const libro of value) {
      if ((libro.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (libro.ano.toLowerCase().indexOf(arg.toLowerCase()) > -1) || (libro.autor.toLowerCase().indexOf(arg.toLowerCase()) > -1)) {
        resultsLibros.push(libro);
      }
    };
    return resultsLibros;
  }

}
