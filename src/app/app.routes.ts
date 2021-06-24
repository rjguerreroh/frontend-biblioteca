import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LibrosComponent } from './components/libros/libros.component';
import { EditorialesComponent } from './components/editoriales/editoriales.component';
import { AutoresComponent } from './components/autores/autores.component';
import { LibroComponent } from './components/libro/libro.component';


const APP_ROUTES: Routes = [
    { path: 'libros', component: LibrosComponent },
    { path: 'libro', component: LibroComponent },
    { path: 'editoriales', component: EditorialesComponent },
    { path: 'autores', component: AutoresComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'libros' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);