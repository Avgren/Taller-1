"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
exports.productByCategory = productByCategory;
exports.isProductZero = isProductZero;
exports.productByPrice = productByPrice;
exports.products = [
    {
        id: 1,
        name: "computadora",
        price: 150,
        stock: 10,
        category: "tecnologia",
    },
    {
        id: 2,
        name: "nevera",
        price: 400,
        stock: 15,
        category: "electrodomestico",
    },
    {
        id: 3,
        name: "gorra",
        price: 3,
        stock: 30,
    },
    {
        id: 4,
        name: "telefono",
        price: 125,
        stock: 4,
        category: "tecnologia",
    },
    {
        id: 5,
        name: "microondas",
        price: 90,
        stock: 8,
        category: "electrodomestico",
    },
    {
        id: 6,
        name: "playstation 5",
        price: 700,
        stock: 12,
        category: "tecnologia",
    },
];
// 1
function productByCategory(products) {
    return products.filter((product) => product.category === "tecnologia");
}
// 2
function isProductZero(products) {
    return products.some((product) => product.stock = 0);
}
// 3
function productByPrice(products) {
    const minPrice = 100;
    const maxPrice = 200;
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
}
