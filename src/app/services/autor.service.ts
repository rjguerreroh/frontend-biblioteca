import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }

  getAutores(){
    return this.http.get('http://127.0.0.1:3000/api/autores');
  }
}
