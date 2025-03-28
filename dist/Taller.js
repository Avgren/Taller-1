"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.precioTotal = exports.productosOrdenados = void 0;
const products = [
    {
        id: 1,
        name: "Computadora",
        price: 150,
        category: "electronica",
    },
    {
        id: 2,
        name: "camisa blanca",
        price: 10,
        category: "ropa",
    },
    {
        id: 3,
        name: "botas jordan negras",
        price: 20,
        category: "calzado",
    },
    {
        id: 4,
        name: "pantalon azul",
        price: 15,
        category: "ropa",
    },
    {
        id: 5,
        name: "audifonos",
        price: 12,
        category: "electronica",
    },
    {
        id: 6,
        name: "gorra azul",
        price: 5,
        category: "ropa",
    }
];
const productosElectronicos = products.map((product) => {
    const categoriaElectronica = product.category.includes("electronica");
    if (categoriaElectronica) {
        return {
            name: product.name
        };
    }
});
exports.productosOrdenados = productosElectronicos.sort();
exports.precioTotal = products.reduce((acumulador, num) => num.price + acumulador, 0);
