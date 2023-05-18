import * as orderService from './services/order-service.js';
import Order from "./models /order";

const data = document.getElementById("orderInput").innerHTML.split("/n").map(x => Number(x));

const order = new Order(data[0],data[1],data[2]);

const total = orderService.total(order);

console.log(`Pedido Código=${order.code}`);
console.log(`Valor total=${total.toFixed(2)}`);



