import Order from "./models /order";

const data = document.getElementById("orderInput").innerHTML.split("/n");

const order = new Order(Number(data[0]), Number(data[1]), Number(data[2]));

const total = orderService.total(data[1], data[2]);

console.log(`Pedido Código=${data[0]}`);
console.log(`Valor total=${total}`);



