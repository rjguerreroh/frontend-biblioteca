import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//Rutas
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { LibroComponent } from './components/libro/libro.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { LibrosComponent } from './components/libros/libros.component';
import { AutoresComponent } from './components/autores/autores.component';
import { EditorialesComponent } from './components/editoriales/editoriales.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LibroComponent,
    FilterPipe,
    LibrosComponent,
    AutoresComponent,
    EditorialesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
