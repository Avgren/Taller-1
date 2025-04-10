"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
exports.productosDisponibles = productosDisponibles;
exports.productoCaro = productoCaro;
exports.calcularDescuento = calcularDescuento;
exports.products = [
    {
        id: 1,
        name: "harina",
        price: 70,
        stock: 10,
    },
    {
        id: 2,
        name: "arroz",
        price: 50,
        stock: 3,
    },
    {
        id: 3,
        name: "pasta",
        price: 65,
        stock: 0,
    },
    {
        id: 4,
        name: "jugo",
        price: 120,
        stock: 15,
    },
    {
        id: 5,
        name: "carne",
        price: 90,
        stock: 0,
    }
];
function productosDisponibles(products) {
    return products = products.filter((product) => product.stock > 0);
}
function productoCaro(products) {
    // return products=products.sort(()=>)
}
function calcularDescuento(products) {
    return products.map((product) => ({
        name: product.name,
        price: product.price - (product.price * 0.5),
    }));
}
