import { Categorias } from "./categorias";

class Video {
    nombre: string;
    miniatura: string;
    nombreCanal: string;
    visitas: number;
    antiguedad: string; // Puede ser un formato como "2 años", "3 días", etc.
    tiempoReproduccion: string; // Puede ser un formato como "10:15" (minutos:segundos)
    fotoCanal: string;
    Lista: boolean;
    Categoria: Categorias;
  
    constructor(
      nombre: string,
      miniatura: string,
      nombreCanal: string,
      visitas: number,
      antiguedad: string,
      tiempoReproduccion: string,
      fotoCanal: string,
      lista: boolean,
      categoria: Categorias 
    ) {
      this.nombre = nombre;
      this.miniatura = miniatura;
      this.nombreCanal = nombreCanal;
      this.visitas = visitas;
      this.antiguedad = antiguedad;
      this.tiempoReproduccion = tiempoReproduccion;
      this.fotoCanal = fotoCanal;
      this.Lista = lista;
      this.Categoria = categoria;
    }
  }
  