export interface Conocimiento {
  tituloConocimiento: string;
  posicion:number;
  // nivel: 'básico' | 'intermedio' | 'avanzado'; // puedes usarlo para ngClass
}

export interface listaConocimientos{
  descripcion:string;
  posicion:number;
}

export interface InfoCompleta {
  imagen: string;
  titulo: string;
  subtitulo: string;
  tituloConocimientos: string;
  conocimientos: Conocimiento[];
  listaConocimientos:listaConocimientos[];
  github: string;
}