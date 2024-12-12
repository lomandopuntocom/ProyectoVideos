import { Component } from '@angular/core';

@Component({
  selector: 'historialvideos',
  templateUrl: './historialvideos.component.html',
  styleUrls: ['./historialvideos.component.css']
})
export class HistorialVideosComponent {

  videoHistory = [
    {
      thumbnail: 'path/to/image1.jpg',
      title: 'Curso de Matemáticas Básicas',
      channel: 'Educación Plus',
      uploadDate: '2023-01-01',
      viewedDate: '2024-12-01'
    },
    {
      thumbnail: 'https://via.placeholder.com/120x67',
      title: 'Introducción a la Física',
      channel: 'Ciencia Fácil',
      uploadDate: '2023-02-15',
      viewedDate: '2024-11-15'
    },
    {
      thumbnail: 'https://via.placeholder.com/120x67',
      title: 'Historia del Arte Moderno',
      channel: 'Arte para Todos',
      uploadDate: '2023-03-10',
      viewedDate: '2024-10-30'
    },
    {
      thumbnail: 'https://via.placeholder.com/120x67',
      title: 'Aprende a Programar en JavaScript',
      channel: 'CodeAcademy',
      uploadDate: '2023-04-20',
      viewedDate: '2024-09-20'
    },
    {
      thumbnail: 'https://via.placeholder.com/120x67',
      title: 'Química Orgánica para Principiantes',
      channel: 'Química Fácil',
      uploadDate: '2023-05-05',
      viewedDate: '2024-08-10'
    },{
      thumbnail: 'https://via.placeholder.com/120x67',
      title: 'Técnicas de Escritura Creativa',
      channel: 'Escribir Mejor',
      uploadDate: '2023-06-18',
      viewedDate: '2024-07-25'
    },
    {
      thumbnail: 'https://via.placeholder.com/120x67',
      title: 'Biología: El Reino Animal',
      channel: 'BioMundo',
      uploadDate: '2023-07-25',
      viewedDate: '2024-06-15'
    },
    {
      thumbnail: 'https://via.placeholder.com/120x67',
      title: 'Geografía Física y Humana',
      channel: 'GeoAprende',
      uploadDate: '2023-08-12',
      viewedDate: '2024-05-20'
    },
    {
      thumbnail: 'https://via.placeholder.com/120x67',
      title: 'Filosofía para Principiantes',
      channel: 'Pensar Mejor',
      uploadDate: '2023-09-01',
      viewedDate: '2024-04-15'
    },
    {
      thumbnail: 'https://via.placeholder.com/120x67',
      title: 'Técnicas de Estudio Efectivas',
      channel: 'Aprender Más',
      uploadDate: '2023-10-10',
      viewedDate: '2024-03-10'
    },
    {
      thumbnail: 'https://via.placeholder.com/120x67',
      title: 'Psicología del Aprendizaje',
      channel: 'Mente Activa',
      uploadDate: '2023-11-05',
      viewedDate: '2024-02-05'
    },
    {
      thumbnail: 'https://via.placeholder.com/120x67',
      title: 'Historia de la Tecnología',
      channel: 'TecnoHistoria',
      uploadDate: '2023-12-01',
      viewedDate: '2024-01-15'
    }
  ];
}
