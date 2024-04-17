"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enumDepartamento_1 = require("./enums/enumDepartamento");
const functionSalary_1 = require("./functions/functionSalary");
const empleado = {
    cedula: 11294785253,
    nombre: 'Martha',
    salarioBase: 50000,
    departamento: enumDepartamento_1.Departamento.IT,
};
const salarioNeto = (0, functionSalary_1.calcularSalarioNeto)(empleado);
console.log(`El salario total del empleado ${empleado.nombre} es: ${salarioNeto}`);
