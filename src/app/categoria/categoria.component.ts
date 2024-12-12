import { Component, Input } from '@angular/core';

interface Curso {
  titulo: string;
  categoria: string;
  detalle: string;
  docente: string;
  videosCount: number;
  necesarios: string[];
  fechaPublicacion: string;
  videos: Video[];
  botones: {
    agregar: boolean;
    eliminar: boolean;
  };
}

interface Video {
  titulo: string;
  docente: string;
  vistas: number;
  duracion: string;
  link: string;
}

@Component({
  selector: 'categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  videos: Video[] = generarVideo(12);
  cursos: Curso[] = generarCurso(this.videos, 10);
  curso: Curso = this.cursos[getRandomInt(0,9)];
}
  function getRandomInt(min:  number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Función para generar un video aleatorio
  function generarVideo(cantidad: number): Video[] {
    let videos: Video[] = [];
    for (let index = 1; index <= cantidad; index++) {
      videos.push(
        {
          titulo: `Video `+ index,
          docente: 'Autor Aleatorio',
          vistas: getRandomInt(100, 10000),
          duracion: `${getRandomInt(1, 60)}:${getRandomInt(0, 59)}`,
          link: 'https://www.example.com/video'
        }
      );
    }
  
    return videos;
  }

  // Función para generar un curso aleatorio
  function generarCurso(videos: Video[], cantidad: number): Curso[] {
    let cursos: Curso[] = [];
    for (let index = 0; index <= cantidad; index++) {
      cursos.push(
        {
          titulo: `Curso de Programacion ${getRandomInt(1, 10)}`,
          categoria: 'Categoría Aleatoria',
          detalle: 'Descripción del curso',
          videos: videos,
          docente: "Jose Enrique Diaz",
          videosCount: videos.length,
          necesarios : ["ninguno"],
          fechaPublicacion: "02/01/2015",
          botones: {
            agregar: true,
            eliminar: false
          }
        }
      );
      
    }
    return cursos;
  }
