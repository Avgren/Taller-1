// type User={
//     id: number;
//     name: string;
//     email: string;
//     password: number;
// }

import {precioTotal, productosOrdenados } from "./Taller";

// const users:User[]=[
//     {
//         id: 1,
//         name:"carmen",
//         email:"carmen@gmail.com",
//         password:123456,               
//     },
//     {
//         id: 2,
//         name:"andres",
//         email:"andres@gmail.com",
//         password:123456,               
//     },
//     {
//         id: 3,
//         name:"marcos",
//         email:"marcos@gmail.com",
//         password:123456,               
//     },
//     {
//         id: 4,
//         name:"jose",
//         email:"jose@gmail.com",
//         password:123456,               
//     },
//     {
//         id: 5,
//         name:"maria",
//         email:"maria@gmail.com",
//         password:123456,               
//     },
//     {
//         id: 6,
//         name:"pedro",
//         email:"pedro@gmail.com",
//         password:123456,               
//     },
// ];

// const users2:User[]=[
//     {
//         id: 1,
//         name:"carmen",
//         email:"carmen@gmail.com",
//         password:123456,               
//     },
//     {
//         id: 2,
//         name:"andres",
//         email:"andres@gmail.com",
//         password:123456,               
//     },
//     {
//         id: 3,
//         name:"marcos",
//         email:"marcos@gmail.com",
//         password:123456,               
//     },
//     {
//         id: 4,
//         name:"jose",
//         email:"jose@gmail.com",
//         password:123456,               
//     },
//     {
//         id: 5,
//         name:"maria",
//         email:"maria@gmail.com",
//         password:123456,               
//     },
//     {
//         id: 6,
//         name:"pedro",
//         email:"pedro@gmail.com",
//         password:123456,               
//     },
// ];

// // const user:User={
// //     id: 0,
// //     name: "",
// //     email: "",
// //     password: 0
// // }


// console.table(users[3])
// // console.table(users.concat(users2))

// // const filter = users.findIndex( (user) => user.name=="jose")

// const array = [5,4,8,1,2,7]
// const flat = array.sort()

// console.log(array)

type User={
    id:number;
    name:string;
    email:string;
    password:string;
    role:string;
    isActive:boolean;
    createdAt:Date;
    uptadetAt:Date;
}

const users:User[]=[
    {
        id: 1,
        name: "andres",
        email: "andres@gmail.com",
        password: "123456",
        role: "ADMIN",
        isActive: true,
        createdAt:  new Date("03/27/2025"),
        uptadetAt:  new Date("03/27/2025"),
    },
    {
        id: 2,
        name: "carlos",
        email: "carlos@hotmail.com",
        password: "123456",
        role: "ADMIN",
        isActive: true,
        createdAt:  new Date("03/27/2025"),
        uptadetAt:  new Date("03/27/2025"),
    },
    {
        id:3,
        name: "jesus",
        email:"jesus@gmail.com",
        password: "123456",
        role: "ADMIN",
        isActive: false,
        createdAt: new Date("02/27/2025"),
        uptadetAt: new Date("03/27/2025"),
    }
]

// 1
// const values = users.map((user)=>{
//     const gmail = user.email.includes("@gmail");
//     if(gmail){
//         return {
//             name: user.name,
//             email: user.email,
//         }
//     }
// })

// console.table(values)

// 2
// const activos=users.filter((user)=>user.isActive);
// console.table(activos)

// 3
// const eliminado=users.slice(2, 1);
// console.table(eliminado)

// 4

// 5
// const antiguos=users.filter((user)=>user.createdAt<new Date("03/27/2025"))
// console.table(antiguos)

// 6


type CreateUser = {
    name: string;
    email: string;
    password: string;
}

function crearUsuario( createUser: CreateUser ): User{
    const user:User = {
        name: createUser.name,
        email: createUser.email,
        password: createUser.password,
        role: "USER",
        isActive: true,
        id: users.length+1,
        createdAt: new Date(),
        uptadetAt: new Date()
    }

    users.push(user)

    return user
}

// console.log(crearUsuario({name: "carlos", email: "carlos@google.com", password: "123456"}))
productosOrdenados
// console.table(productosOrdenados)
precioTotal
console.log(precioTotal)