import { Empleado } from '../src/interfaces/interfaceEmpleado';
import { Departamento } from '../src/enums/enumDepartamento';
import { calcularSalarioNeto } from '../src/functions/functionSalary'


const empleado: Empleado={
    cedula: 11294785253,
    nombre: 'Martha',
    salarioBase: 50000,
    departamento: Departamento.IT,

}

const salarioNeto=calcularSalarioNeto(empleado)
console.log(`El salario total del empleado ${empleado.nombre} es: ${salarioNeto}`);