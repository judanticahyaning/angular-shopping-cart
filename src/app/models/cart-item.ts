import { Product } from "./product";

export class CartItem {
    productId : number;
    productName : string;
    qty : number;
    price : number;

    constructor( product : Product, qty=0, price=0){
        this.productId = product.id
        this.productName = product.name
        this.qty = qty
        this.price = price
    }
}
