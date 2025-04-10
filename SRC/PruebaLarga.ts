type Products={
    id:number;
    name:string;
    price:number;
    stock:number;
}

export const products:Products[]=[
    {
        id:1,
        name:"harina",
        price:70,
        stock:10,
    },
    {
        id:2,
        name:"arroz",
        price:50,
        stock:3,
    },
    {
        id:3,
        name:"pasta",
        price:65,
        stock:0,
    },
    {
        id:4,
        name:"jugo",
        price:120,
        stock:15,
    },
    {
        id:5,
        name:"carne",
        price:90,
        stock:0,
    }
]
type Return={
    name:string,
    price:number,
    stock:number
}

export function productosDisponibles(products:Products[]):Return[]{
    return products=products.filter((product)=>product.stock>0)
}

export function productoCaro(products:Products[]){
    // return products=products.sort(()=>)
}

// 2

type Return2={
    name:string,
    price:number,
}

export function calcularDescuento(products:Products[]):Return2[]{
    return products.map((product)=>({
        name:product.name,
        price:product.price - (product.price*0.5),
    }))
}