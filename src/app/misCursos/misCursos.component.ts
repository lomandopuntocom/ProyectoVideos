import { Component } from '@angular/core';

@Component({
  selector: 'misCursos',
  templateUrl: './misCursos.component.html',
  styleUrls: ['./misCursos.component.css']
})
export class MisCursosComponent {

  cursos = [
    {
      thumbnail: 'path/to/image1.jpg',
      title: 'Introducción a la Programación',
      channel: 'Cursos Online',
      date: '2 years ago',
      count: '12+'
    },
    {
      thumbnail: 'path/to/image2.jpg',
      title: 'Aprende Matemáticas Básicas',
      channel: 'Academia Virtual',
      date: '1 year ago',
      count: '8+'
    },
    {
      thumbnail: 'path/to/image3.jpg',
      title: 'Historia Universal Moderna',
      channel: 'EduHistoria',
      date: '6 months ago',
      count: '15+'
    },
    {
      thumbnail: 'path/to/image4.jpg',
      title: 'Fundamentos de Física',
      channel: 'Ciencia Fácil',
      date: '3 years ago',
      count: '10+'
    },
    {
      thumbnail: 'path/to/image5.jpg',
      title: 'Introducción a la Psicología',
      channel: 'PsicoAprende',
      date: '2 years ago',
      count: '9+'
    },
    {
      thumbnail: 'path/to/image6.jpg',
      title: 'Química para Principiantes',
      channel: 'Ciencia Fácil',
      date: '5 months ago',
      count: '20+'
    },
    {
      thumbnail: 'path/to/image7.jpg',
      title: 'Inglés Básico para Todos',
      channel: 'Idiomas Online',
      date: '1 year ago',
      count: '18+'
    },
    {
      thumbnail: 'path/to/image8.jpg',
      title: 'Diseño Gráfico desde Cero',
      channel: 'Creatividad Digital',
      date: '3 years ago',
      count: '25+'
    },
    {
      thumbnail: 'path/to/image9.jpg',
      title: 'Introducción al Marketing Digital',
      channel: 'Marketing Pro',
      date: '1 year ago',
      count: '7+'
    },
    {
      thumbnail: 'path/to/image10.jpg',
      title: 'Aprende a Dibujar',
      channel: 'Arte en Línea',
      date: '2 months ago',
      count: '22+'
    },
    {
      thumbnail: 'path/to/image11.jpg',
      title: 'Curso de Fotografía Básica',
      channel: 'FotoMaestros',
      date: '4 years ago',
      count: '5+'
    },
    {
      thumbnail: 'path/to/image12.jpg',
      title: 'Finanzas Personales para Principiantes',
      channel: 'EduFinanzas',
      date: '6 months ago',
      count: '11+'
    }
  ];
  
}
