"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularSalarioNeto = void 0;
var enumDepartamento_1 = require("../enums/enumDepartamento");
function calcularSalarioNeto(Empleado) {
    var bono;
    switch (Empleado.departamento) {
        case enumDepartamento_1.Departamento.IT:
            bono = 0.08;
            break;
        case enumDepartamento_1.Departamento.HR:
            bono = 0.12;
            break;
        case enumDepartamento_1.Departamento.SALES:
            bono = 0.1;
            break;
        case enumDepartamento_1.Departamento.FINANCE:
            bono = 0.09;
            break;
        default:
            throw new Error('Departamento no válido');
    }
    return Empleado.salarioBase * (1 + bono);
}
exports.calcularSalarioNeto = calcularSalarioNeto;
