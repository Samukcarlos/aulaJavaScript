import Employee from './models /employee.js';
import * as salariService from './services/salary-service.js';

const data = document.getElementById("grossSalaryInput").innerHTML.split("/n");

const employee = new Employee(data[0], Number(data[1]));

const netSalary = salariService.netsalary(employee);

console.log(`Funcionário = ${employee.name}`);
console.log(`Salário bruto = ${employee.grossSalary.toFixed(2)}`);
console.log(`Salário líquido = ${netSalary.toFixed(2)}`);