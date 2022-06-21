export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id=0, name='', description='', price=0, imageUrl='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c4e7504-8c84-4735-a40a-8ce2427d16b2/air-max-2021-older-shoes-dRthcp.png'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imageUrl = imageUrl
    }

    
}
