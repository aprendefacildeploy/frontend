import { Routes } from '@angular/router';
import { ContenidoListComponent } from './contenido/contenido-list/contenido-list.component';
import { ContenidoFormComponent } from './contenido/contenido-form/contenido-form.component';
import { TipoContenidoListComponent } from './tipo-contenido/tipo-contenido-list/tipo-contenido-list.component';
import { TipoContenidoFormComponent } from './tipo-contenido/tipo-contenido-form/tipo-contenido-form.component';
import { TemaListComponent } from './tema/tema-list/tema-list.component';
import { TemaFormComponent } from './tema/tema-form/tema-form.component';
import { UnidadListComponent } from './unidad/unidad-list/unidad-list.component';
import { UnidadFormComponent } from './unidad/unidad-form/unidad-form.component';
import { PersonaListComponent } from './persona/persona-list/persona-list.component';
import { PersonaFormComponent } from './persona/persona-form/persona-form.component';
import { RetoListComponent } from './reto/reto-list/reto-list.component';
import { RetoFormComponent } from './reto/reto-form/reto-form.component';
import { TipoRetoListComponent } from './tipo-reto/tipo-reto-list/tipo-reto-list.component';
import { TipoRetoFormComponent } from './tipo-reto/tipo-reto-form/tipo-reto-form.component';
import { PersonaUnidadListComponent } from './persona-unidad/persona-unidad-list/persona-unidad-list.component';
import { PersonaUnidadFormComponent } from './persona-unidad/persona-unidad-form/persona-unidad-form.component';
import { DimensionListComponent } from './dimension/dimension-list/dimension-list.component';
import { DimensionFormComponent } from './dimension/dimension-form/dimension-form.component';
import { RetoPreguntaListComponent } from './reto-pregunta/reto-pregunta-list/reto-pregunta-list.component';
import { RetoPreguntaFormComponent } from './reto-pregunta/reto-pregunta-form/reto-pregunta-form.component';
import { RetoPreguntaOpcionListComponent } from './reto-pregunta-opcion/reto-pregunta-opcion-list/reto-pregunta-opcion-list.component';
import { RetoPreguntaOpcionFormComponent } from './reto-pregunta-opcion/reto-pregunta-opcion-form/reto-pregunta-opcion-form.component';
import { GeoreferenciaListComponent } from './georeferencia/georeferencia-list/georeferencia-list.component';
import { GeoreferenciaFormComponent } from './georeferencia/georeferencia-form/georeferencia-form.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { MenuFormComponent } from './menu/menu-form/menu-form.component';
import { MenuPersonaListComponent } from './menu-persona/menu-persona-list/menu-persona-list.component';
import { MenuPersonaFormComponent } from './menu-persona/menu-persona-form/menu-persona-form.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginComponent } from './auth/login/login.component';
import { ReporteListComponent } from './reporte/reporte-list/reporte-list.component';
import { ReporteFormComponent } from './reporte/reporte-form/reporte-form.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auth/login', component: LoginComponent },
  { path: 'contenido', component: ContenidoListComponent, canActivate: [AuthGuard] },
  { path: 'contenido/new', component: ContenidoFormComponent, canActivate: [AuthGuard] },
  { path: 'contenido/edit/:id', component: ContenidoFormComponent, canActivate: [AuthGuard] },
  { path: 'tipo-contenido', component: TipoContenidoListComponent, canActivate: [AuthGuard] },
  { path: 'tipo-contenido/new', component: TipoContenidoFormComponent, canActivate: [AuthGuard] },
  { path: 'tipo-contenido/edit/:id', component: TipoContenidoFormComponent, canActivate: [AuthGuard] },
  { path: 'tema', component: TemaListComponent, canActivate: [AuthGuard] },
  { path: 'tema/new', component: TemaFormComponent, canActivate: [AuthGuard] },
  { path: 'tema/edit/:id', component: TemaFormComponent, canActivate: [AuthGuard] },
  { path: 'unidad', component: UnidadListComponent, canActivate: [AuthGuard] },
  { path: 'unidad/new', component: UnidadFormComponent, canActivate: [AuthGuard] },
  { path: 'unidad/edit/:id', component: UnidadFormComponent, canActivate: [AuthGuard] },
  { path: 'persona', component: PersonaListComponent, canActivate: [AuthGuard] },
  { path: 'persona/new', component: PersonaFormComponent, canActivate: [AuthGuard] },
  { path: 'persona/edit/:id', component: PersonaFormComponent, canActivate: [AuthGuard] },
  { path: 'reto', component: RetoListComponent, canActivate: [AuthGuard] },
  { path: 'reto/new', component: RetoFormComponent, canActivate: [AuthGuard] },
  { path: 'reto/edit/:id', component: RetoFormComponent, canActivate: [AuthGuard] },
  { path: 'tipo-reto', component: TipoRetoListComponent, canActivate: [AuthGuard] },
  { path: 'tipo-reto/new', component: TipoRetoFormComponent, canActivate: [AuthGuard] },
  { path: 'tipo-reto/edit/:id', component: TipoRetoFormComponent, canActivate: [AuthGuard] },
  { path: 'persona-unidad', component: PersonaUnidadListComponent, canActivate: [AuthGuard] },
  { path: 'persona-unidad/new', component: PersonaUnidadFormComponent, canActivate: [AuthGuard] },
  { path: 'persona-unidad/edit/:id', component: PersonaUnidadFormComponent, canActivate: [AuthGuard] },
  { path: 'dimension', component: DimensionListComponent, canActivate: [AuthGuard] },
  { path: 'dimension/new', component: DimensionFormComponent, canActivate: [AuthGuard] },
  { path: 'dimension/edit/:id', component: DimensionFormComponent, canActivate: [AuthGuard] },
  { path: 'reto-pregunta', component: RetoPreguntaListComponent, canActivate: [AuthGuard] },
  { path: 'reto-pregunta/new', component: RetoPreguntaFormComponent, canActivate: [AuthGuard] },
  { path: 'reto-pregunta/edit/:id', component: RetoPreguntaFormComponent, canActivate: [AuthGuard] },
  { path: 'reto-pregunta-opcion', component: RetoPreguntaOpcionListComponent, canActivate: [AuthGuard] },
  { path: 'reto-pregunta-opcion/new', component: RetoPreguntaOpcionFormComponent, canActivate: [AuthGuard] },
  { path: 'reto-pregunta-opcion/edit/:id', component: RetoPreguntaOpcionFormComponent, canActivate: [AuthGuard] },
  { path: 'georeferencia', component: GeoreferenciaListComponent, canActivate: [AuthGuard] },
  { path: 'georeferencia/new', component: GeoreferenciaFormComponent, canActivate: [AuthGuard] },
  { path: 'georeferencia/edit/:id', component: GeoreferenciaFormComponent, canActivate: [AuthGuard] },
  { path: 'menu', component: MenuListComponent, canActivate: [AuthGuard] },
  { path: 'menu/new', component: MenuFormComponent, canActivate: [AuthGuard] },
  { path: 'menu/edit/:id', component: MenuFormComponent, canActivate: [AuthGuard] },
  { path: 'menu-persona', component: MenuPersonaListComponent, canActivate: [AuthGuard] },
  { path: 'menu-persona/new', component: MenuPersonaFormComponent, canActivate: [AuthGuard] },
  { path: 'menu-persona/edit/:id', component: MenuPersonaFormComponent, canActivate: [AuthGuard] },
  { path: 'reporte', component: ReporteListComponent, canActivate: [AuthGuard] },
  { path: 'reporte/new', component: ReporteFormComponent, canActivate: [AuthGuard] },
  { path: 'reporte/edit/:id', component: ReporteFormComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home'}
];