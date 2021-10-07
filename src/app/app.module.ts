import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaNoExisteComponent } from './paginas/pagina-no-existe/pagina-no-existe.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ContactosComponent,
    LoginComponent,
    PaginaNoExisteComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
