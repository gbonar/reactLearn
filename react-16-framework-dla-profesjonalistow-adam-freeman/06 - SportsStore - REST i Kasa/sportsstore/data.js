var faker = require("faker");
var data = [];
var categories = ["Sporty wodne", "Piłka nożna", "Szachy", "Bieganie"];
faker.seed(100);
for (let i = 1; i <= 503; i++) {
  var category = faker.helpers.randomize(categories);
  data.push({
    id: i,
    name: faker.commerce.productName(),
    category: category,
    description: `${category}: ${faker.lorem.sentence(3)}`,
    price: Number(faker.commerce.price())
  })
}

module.exports = function () {
  return {
    categories: categories,
    products: data,
    orders: []
  }
}

{/*
module.exports = function () {
  return { 
    categories: ["Sporty wodne", "Piłka nożna", "Szachy"],
    products: [
      { id: 1, name: "Kajak", category: "Sporty wodne", 
        description: "Jednoosobowa łódka.", price: 990 },
      { id: 2, name: "Kamizelka ratunkowa.", category: "Sporty wodne", 
        description: "Pewna, bezpieczna i modna.", price: 79.95 },
      { id: 3, name: "Piłka nożna", category: "Piłka nożna", 
        description: "Rozmiar i waga zatwierdzona przez FIFA.", price: 220.50 },
      { id: 4, name: "Flagi do narożników boiska", category: "Piłka nożna", 
        description: "Nadadzą twemu boisku profesjonalny wygląd.", 
        price: 450.99 },
      { id: 5, name: "Stadion", category: "Piłka nożna", 
        description: "Stadion na 35 000 miejsc w niewielkim opakowaniu.", price: 1795000 },
      { id: 6, name: "Czapka geniusza", category: "Szachy", 
        description: "Usprawnia efektywność działania mózgu o 75%.", price: 129 },
      { id: 7, name: "Niesforne włosy", category: "Szachy", 
        description: "Niezauważalnie rozpraszają przeciwnika.", 
        price: 89 },
      { id: 8, name: "Ludzka szachownica", category: "Szachy", 
        description: "Śmieszna zabawa dla całej rodziny.", price: 230 },
      { id: 9, name: "Błyszczący król", category: "Szachy", 
        description: "Pozłacany, wysadzany diamentami król", price: 3999 }
    ],
    orders: []
  }
}
*/}