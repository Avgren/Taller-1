// type Product={
//     id:number;
//     name:string;
//     price:number;
//     category:string;
// }

// const products:Product[]=[
//     {
//         id:1,
//         name:"Computadora",
//         price:150,
//         category:"electronica",
//     },
//     {
//         id:2,
//         name:"camisa blanca",
//         price:10,
//         category:"ropa",
//     },
//     {
//         id:3,
//         name:"botas jordan negras",
//         price:20,
//         category:"calzado",
//     },
//     {
//         id:4,
//         name:"pantalon azul",
//         price:15,
//         category:"ropa",
//     },
//     {
//         id:5,
//         name:"audifonos",
//         price:12,
//         category:"electronica",
//     },
//     {
//         id:6,
//         name:"gorra azul",
//         price:5,
//         category:"ropa",
//     }
// ]

// const productosElectronicos=products.map((product)=>{
//     const categoriaElectronica=product.category.includes("electronica");
//     if(categoriaElectronica){
//         return{
//             name:product.name
//         }
//     }
// })
// export const productosOrdenados= productosElectronicos.sort();

// export const precioTotal=products.reduce((acumulador, num)=> num.price+acumulador,0)

// // 2
// type Students={
//     name:string;
//     califications:number[];
// }

// type Return={
//     name:string;
//     average:number;
// }

// const students:Students[]=[
//     {
//         name:"nelson",
//         califications:[18,5,16]
//     },
//     {
//         name:"angel",
//         califications:[18,17,18]
//     }
// ]

// function calculate(students:Students[]):Return[]{
//     return students.map((student)=>({
//         name:student.name,
//         average:student.califications.reduce((acc,curr)=>curr+acc,0)/student.califications.length
//     }));
// }