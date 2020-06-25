module.exports = function () {
  var data = {
    products: [
      { id: 1, name: "Kajak", category: "Sporty wodne", price: 1299 },
      { id: 2, name: "Kamizelka ratunkowa", category: "Sporty wodne", price: 48.95 },
      { id: 3, name: "Piłka nożna", category: "Piłka nożna", price: 220.50 },
      { id: 4, name: "Flagi do narożników boiska", category: "Piłka nożna", price: 450.95 },
      { id: 5, name: "Stadion", category: "Piłka nożna", price: 1795000 },
      { id: 6, name: "Czapka geniusza", category: "Szachy", price: 129 },
      { id: 7, name: "Niesforme włosy", category: "Szachy", price: 89.95 },
      { id: 8, name: "Ludzka szachownica", category: "Szachy", price: 230 },
      { id: 9, name: "Błyszczący król", category: "Szachy", price: 3999 }
    ],
    suppliers: [
      { id: 1, name: "ProfiSurf", city: "Chałupy", products: [1, 2] },
      { id: 2, name: "Sklep trampkarza", city: "Kraków", products: [3, 4, 5] },
      { id: 3, name: "GryPlanszowe", city: "Wrocław", products: [6, 7, 8, 9] },
    ]
  }
  return data;
}
