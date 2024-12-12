import { Component } from '@angular/core';

@Component({
  selector: 'categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  cursos: Curso[] = generarCurso(10);

  categorias = [
    {
        nombre: 'Desarrollo Web',
        cursos: [
            { titulo: 'Curso Angular', docente: 'Juan Pérez', fechaPublicacion: '2024-01-10' },
            { titulo: 'Curso React', docente: 'Ana López', fechaPublicacion: '2024-01-15' },
            { titulo: 'Curso Angular', docente: 'Juan Pérez', fechaPublicacion: '2024-01-10' },
            { titulo: 'Curso React', docente: 'Ana López', fechaPublicacion: '2024-01-15' },
        ]
    },
    {
        nombre: 'Ciencia de Datos',
        cursos: [
            { titulo: 'Curso Python', docente: 'Carlos Gómez', fechaPublicacion: '2024-02-05' },
            { titulo: 'Curso R', docente: 'Laura Torres', fechaPublicacion: '2024-02-12' },
            { titulo: 'Curso Python', docente: 'Carlos Gómez', fechaPublicacion: '2024-02-05' },
            { titulo: 'Curso R', docente: 'Laura Torres', fechaPublicacion: '2024-02-12' },
        ]
    },
    {
        nombre: 'Inteligencia Artificial',
        cursos: [
            { titulo: 'Curso Machine Learning', docente: 'Sofía Martínez', fechaPublicacion: '2024-03-20' },
            { titulo: 'Curso Deep Learning', docente: 'Luis Fernández', fechaPublicacion: '2024-03-25' },
            { titulo: 'Curso Machine Learning', docente: 'Sofía Martínez', fechaPublicacion: '2024-03-20' },
            { titulo: 'Curso Deep Learning', docente: 'Luis Fernández', fechaPublicacion: '2024-03-25' },
        ]
    },
    {
        nombre: 'Diseño Gráfico',
        cursos: [
            { titulo: 'Curso Adobe Photoshop', docente: 'María Torres', fechaPublicacion: '2024-04-10' },
            { titulo: 'Curso Illustrator', docente: 'Pedro Ramírez', fechaPublicacion: '2024-04-15' },
            { titulo: 'Curso Adobe Photoshop', docente: 'María Torres', fechaPublicacion: '2024-04-10' },
            { titulo: 'Curso Illustrator', docente: 'Pedro Ramírez', fechaPublicacion: '2024-04-15' },
        ]
    },
    {
        nombre: 'Negocios y Finanzas',
        cursos: [
            { titulo: 'Curso de Finanzas Personales', docente: 'Laura Sánchez', fechaPublicacion: '2024-05-05' },
            { titulo: 'Curso Marketing Digital', docente: 'José López', fechaPublicacion: '2024-05-10' },
            { titulo: 'Curso de Finanzas Personales', docente: 'Laura Sánchez', fechaPublicacion: '2024-05-05' },
            { titulo: 'Curso Marketing Digital', docente: 'José López', fechaPublicacion: '2024-05-10' },
        ]
    }
];

}


interface Curso {
  titulo: string;
  categoria: string;
  detalle: string;
  docente: string;
  necesarios: string[];
  fechaPublicacion: string;
  botones: {
    agregar: boolean;
    eliminar: boolean;
  };
}

  function getRandomInt(min:  number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Función para generar un curso aleatorio
  function generarCurso(cantidad: number): Curso[] {
    let cursos: Curso[] = [];
    for (let index = 0; index <= cantidad; index++) {
      cursos.push(
        {
          titulo: `Curso de Programacion ${getRandomInt(1, 10)}`,
          categoria: 'Categoría Aleatoria',
          detalle: 'Descripción del curso',
          docente: "Jose Enrique Diaz",
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
