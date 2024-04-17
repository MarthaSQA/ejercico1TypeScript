import { Departamento } from '../enums/enumDepartamento';
import { Empleado } from '../interfaces/interfaceEmpleado';


export function calcularSalarioNeto(Empleado: Empleado): number {
    let bono: number;
    switch (Empleado.departamento) {
        case Departamento.IT:
            bono = 0.1;
            break;
        case Departamento.HR:
            bono = 0.12;
            break;
        case Departamento.SALES:
            bono = 0.08;
            break;
        case Departamento.FINANCE:
            bono = 0.09;
            break;
        default:
            throw new Error('Departamento no válido');
    }

    return Empleado.salarioBase * (1 + bono);
}