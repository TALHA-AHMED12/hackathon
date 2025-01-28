
export interface Producte {
    _id: string; // Unique identifier for each product
    title: string;
    _type: "products";
    priceWithoutDiscount: string;
    price: number;
    image: string;
    description:string;
    badge:string
  };

// cart data type
export interface Cart {
  id: number;
  name: string;
  slug: string
  size: string;
  price: number;
  image: string;
  qty: number;
  uuid: string|number|undefined
}