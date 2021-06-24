export class Autor{
    nombre: String;
    telefono: String;
    email: String;
    ciudad: String;
    fecha_nacimiento: String;
    constructor(nombre:String, telefono:String, email:String, ciudad:String, fecha_nacimiento:String){
        this.nombre = nombre; 
        this.ciudad = ciudad;
        this.email = email;
        this.telefono = telefono;
        this.fecha_nacimiento = fecha_nacimiento;
    }
}