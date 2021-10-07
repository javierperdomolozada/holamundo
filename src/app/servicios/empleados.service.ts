import { Injectable } from '@angular/core';

export interface Empleado {
  cedula: number,
  nombre: string,
  edad: number
}

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  empleados: Empleado[] = [
    { cedula: 7697173, nombre: 'Javier', edad: 47 },
    { cedula: 7697173, nombre: 'Yohany', edad: 47 },
    { cedula: 7697173, nombre: 'Luis Ernesto', edad: 47 },
    { cedula: 7697173, nombre: 'Alexander', edad: 47 },
    { cedula: 7697173, nombre: 'Gloria Ines', edad: 47 },
  ];

  constructor() {}

  getEmpleados(): Empleado[] {
    return this.empleados;
  }
}
