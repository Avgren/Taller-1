export type Product={
    id:number;
    name:string;
    price:number;
    stock:number;
    category?:string;
};

export const products:Product[]=[
    {
        id:1,
        name:"computadora",
        price:150,
        stock:10,
        category:"tecnologia",
    },
    {
        id:2,
        name:"nevera",
        price:400,
        stock:15,
        category:"electrodomestico",
    },
    {
        id:3,
        name:"gorra",
        price:3,
        stock:30,
    },
    {
        id:4,
        name:"telefono",
        price:125,
        stock:4,
        category:"tecnologia",
    },
    {
        id:5,
        name:"microondas",
        price:90,
        stock:8,
        category:"electrodomestico",
    },
    {
        id:6,
        name:"playstation 5",
        price:700,
        stock:12,
        category:"tecnologia",
    },
]

// 1
export function productByCategory(products:Product[]):Product[]{
    return products.filter((product)=>product.category==="tecnologia")
}

// 2
export function isProductZero(products:Product[]):boolean{
    return products.some((product)=> product.stock=0)
}

// 3
export function productByPrice(products:Product[]):Product[]{
    const minPrice=100
    const maxPrice=200
    return products.filter((product)=> product.price >= minPrice && product.price <= maxPrice)
}