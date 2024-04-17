
import { Departamento } from './enums/enumDepartamento';
import { calcularSalarioNeto } from './functions/functionSalary';
import { Empleado } from './interfaces/interfaceEmpleado';


const empleado: Empleado={
    cedula: 11294785253,
    nombre: 'Martha',
    salarioBase: 50000,
    departamento: Departamento.IT,

}

const salarioNeto=calcularSalarioNeto(empleado)
console.log(`El salario total del empleado ${empleado.nombre} es: ${salarioNeto}`);