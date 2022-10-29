export class Trabajo {
    id!: number;
    nombreTrabajo: string;
    descripcionTrabajo: string;
    imgtrabajo: string;
    linktrabajo: string;
  
    constructor(
      nombreTrabajo: string,
      descripcionTrabajo: string,
      imgtrabajo: string,
      linktrabajo: string
    ) {
      this.nombreTrabajo = nombreTrabajo;
      this.descripcionTrabajo = descripcionTrabajo;
      this.imgtrabajo = imgtrabajo;
      this.linktrabajo = linktrabajo;
    }
  }