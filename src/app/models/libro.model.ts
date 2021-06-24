export class Libro{
    titulo: String;
    editorial: String;
    autor: String;
    ano: String;
    numero_paginas: String;
    genero: String;
    constructor(titulo:String, editorial:String, autor:String, ano:String, numero_paginas:String, genero:String){
        this.titulo = titulo; 
        this.ano = ano;
        this.autor = autor;
        this.editorial = editorial;
        this.numero_paginas = numero_paginas;
        this.genero = genero;
    }
}