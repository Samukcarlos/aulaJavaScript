const item1 = document.querySelector("li");
console.log(item1);

console.log(item1.innerHTML);
console.log(item1.outerHTML);

const items = document.querySelectorAll("li");
console.log(items);

const card1 = document.querySelector(".card");
console.log(card1);

const paragrafo = document.createElement("p");// Acrescentando itens 
paragrafo.innerHTML = "Descrição";
card1.appendChild(paragrafo);

card1.classList.add("super-border"); // mudando classe no css atravez do java script
const cards = document.querySelectorAll(".card");
//const cards = document.getElementsByClassName("card");

console.log(cards);

// Transformando coleção em array
Array.from(cards).map(item =>{
    console.log(item.innerHTML); //.innerHTML para ver o conteúdo dentro de cada card
})
