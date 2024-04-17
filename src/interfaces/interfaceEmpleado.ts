import { Departamento } from '../enums/enumDepartamento'


export interface Empleado {
    cedula:number;
    nombre: string;
    departamento: Departamento;
    salarioBase: number;
   }