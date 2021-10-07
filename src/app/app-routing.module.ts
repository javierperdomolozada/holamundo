import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './paginas/contactos/contactos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaNoExisteComponent } from './paginas/pagina-no-existe/pagina-no-existe.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'contactos', component: ContactosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'paginanoexiste', component: PaginaNoExisteComponent},
  {path:'', redirectTo:'/inicio', pathMatch:'full'},
  {path: '**', component: PaginaNoExisteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
