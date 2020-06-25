module.exports = function () {
  var data = {
    products: [
      { id: 1, name: "Buty przełajowe", category: "Bieganie", price: 240 },
      { id: 2, name: "Podgrzewane rękawiczki", category: "Bieganie", price: 140.90 },
      { id: 3, name: "Spodenki z wkładką", category: "Kolarstwo", price: 99.50 },
      { id: 4, name: "Zestaw naprawczy", category: "Kolarstwo", price: 44.95 },
      { id: 5, name: "Okularki", category: "Pływanie", price: 7950 },
    ],
    suppliers: [
      { id: 1, name: "BiegToZdrowie", city: "Gdańsk", products: [1, 2] },
      { id: 2, name: "RowerMania", city: "Wrocław", products: [3, 4] },
      { id: 3, name: "ŻabąICrowlem", city: "Kraków", products: [5] },
    ]
  }
  return data
}