import { PRODUCTS, SUPPLIERS } from "./dataTypes";

export const initialData = {
  modelData: {
    [PRODUCTS]: [
      { id: 1, name: "Buty przełajowe", category: "Bieganie", price: 340 },
      { id: 2, name: "Kaptur termiczny", category: "Bieganie", price: 61.99 },
      { id: 3, name: "Podgrzewane rękawiczki", category: "Bieganie", price: 221.99 }],
    [SUPPLIERS]: [
      { id: 1, name: "SportBooty", city: "Kraków", products: [1] },
      { id: 2, name: "TermOSport", city: "Gdańsk", products: [2, 3] }],
  }, 
  stateData: {
    editing: false,
    selectedId: -1,
    selectedType: PRODUCTS
  }
}