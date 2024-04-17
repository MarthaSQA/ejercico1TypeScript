"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enumDepartamento_1 = require("../src/enums/enumDepartamento");
var functionSalary_1 = require("../src/functions/functionSalary");
var empleado = {
    cedula: 11294785253,
    nombre: 'Martha',
    salarioBase: 50000,
    departamento: enumDepartamento_1.Departamento.IT,
};
var salarioNeto = (0, functionSalary_1.calcularSalarioNeto)(empleado);
console.log("El salario total del empleado ".concat(empleado.nombre, " es: ").concat(salarioNeto));
