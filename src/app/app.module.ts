import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { testComponent } from './test/test.component';
import { AboutComponent, About2Component, About3Component } from './about/about.component';

import { AdministrarVideosComponent } from './administrarVideos/administrarVideos.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ConfiguracionNotificacionesComponent } from './configuracionNotificaciones/configuracionNotificaciones.component';
import { ConfiguracionReproduccionComponent } from './configuracionReproduccion/configuracionReproduccion.component';
import { ContactoySoporteComponent, ContactoySoporte2Component, ContactoySoporte3Component } from './contactoysoporte/contactoysoporte.component';
import { CursosComponent } from './cursos/cursos.component';
import { EditarPerfilComponent } from './editarperfil/editarperfil.component';
import { FooterComponent } from './footer/footer.component';
import { GuiayRecursosComponent, GuiayRecursos2Component, GuiayRecursos3Component } from './guiayrecursos/guiayrecursos.component';
import { HistorialVideosComponent } from './historialvideos/historialvideos.component';
import { MisCursosComponent } from './misCursos/misCursos.component';
import { MisVideosComponent } from './misVideos/misVideos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { VideosComponent } from './videos/videos.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { CrearContenidoComponent } from './crearcontenido/crearcontenido.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    testComponent,
    AboutComponent,
    About2Component,
    About3Component,
    AdministrarVideosComponent,
    CategoriaComponent,
    CategoriasComponent,
    ConfiguracionNotificacionesComponent,
    ConfiguracionReproduccionComponent,
    ContactoySoporteComponent,
    CursosComponent,
    EditarPerfilComponent,
    FooterComponent,
    GuiayRecursosComponent,
    HistorialVideosComponent,
    MisCursosComponent,
    MisVideosComponent,
    PerfilComponent,
    ReproductorComponent,
    VideosComponent,
    NotificacionesComponent,
    CrearContenidoComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'test', component: testComponent },
      { path: 'about', component: AboutComponent },
      { path: 'about2', component: About2Component},
      { path: 'about3', component: About3Component},
      { path: 'administrarvideos', component: AdministrarVideosComponent },
      { path: 'categoria', component: CategoriaComponent },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'configuracionNotificaciones', component: ConfiguracionNotificacionesComponent },
      { path: 'configuracionReproduccion', component: ConfiguracionReproduccionComponent },
      { path: 'contactoysoporte', component: ContactoySoporteComponent },
      { path: 'contactoysoporte2', component: ContactoySoporte2Component},
      { path: 'contactoysoporte3', component: ContactoySoporte3Component},
      { path: 'cursos', component: CursosComponent },
      { path: 'editarperfil', component: EditarPerfilComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'guiayrecursos', component: GuiayRecursosComponent },
      { path: 'guiayrecursos2', component: GuiayRecursos2Component },
      { path: 'guiayrecursos3', component: GuiayRecursos3Component },
      { path: 'historialvideos', component: HistorialVideosComponent },
      { path: 'misCursos', component: MisCursosComponent },
      { path: 'misVideos', component: MisVideosComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'reproductor', component: ReproductorComponent },
      { path: 'videos', component: VideosComponent },
      { path: 'notificaciones', component: NotificacionesComponent },
      { path: 'crearcontenido', component: CrearContenidoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
