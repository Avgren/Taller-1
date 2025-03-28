"use strict";
// type User={
//     id: number;
//     name: string;
//     email: string;
//     password: number;
// }
Object.defineProperty(exports, "__esModule", { value: true });
const Taller_1 = require("./Taller");
const users = [
    {
        id: 1,
        name: "andres",
        email: "andres@gmail.com",
        password: "123456",
        role: "ADMIN",
        isActive: true,
        createdAt: new Date("03/27/2025"),
        uptadetAt: new Date("03/27/2025"),
    },
    {
        id: 2,
        name: "carlos",
        email: "carlos@hotmail.com",
        password: "123456",
        role: "ADMIN",
        isActive: true,
        createdAt: new Date("03/27/2025"),
        uptadetAt: new Date("03/27/2025"),
    },
    {
        id: 3,
        name: "jesus",
        email: "jesus@gmail.com",
        password: "123456",
        role: "ADMIN",
        isActive: false,
        createdAt: new Date("02/27/2025"),
        uptadetAt: new Date("03/27/2025"),
    }
];
function crearUsuario(createUser) {
    const user = {
        name: createUser.name,
        email: createUser.email,
        password: createUser.password,
        role: "USER",
        isActive: true,
        id: users.length + 1,
        createdAt: new Date(),
        uptadetAt: new Date()
    };
    users.push(user);
    return user;
}
// console.log(crearUsuario({name: "carlos", email: "carlos@google.com", password: "123456"}))
Taller_1.productosOrdenados;
// console.table(productosOrdenados)
Taller_1.precioTotal;
console.log(Taller_1.precioTotal);
