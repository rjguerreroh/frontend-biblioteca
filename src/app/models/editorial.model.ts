export class Editorial{
    nombre: String;
    telefono: String;
    email: String;
    direccion_correspondencia: String;
    maximo_libros: String;
    constructor(nombre:String, telefono:String, email:String, direccion_correspondencia:String, maximo_libros:String){
        this.nombre = nombre; 
        this.direccion_correspondencia = direccion_correspondencia;
        this.email = email;
        this.telefono = telefono;
        this.maximo_libros = maximo_libros;
    }
}