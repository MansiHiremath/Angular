import { Product } from './product';

export class ProductData {
productList:Product[]=[{
    productId:1001,
    name:"T.V",
    brand:"Sony",
    price:25000
},{
    productId:1002,
    name:"Music Player",
    brand:"Sony",
    price:20000
},{
    productId:1003,
    name:"Mobile",
    brand:"Xiaomi",
    price:31000
},
{
    productId:1004,
    name:"Tablet",
    brand:"Sony",
    price:35000
}];
getProductList():Product[]{
return this.productList;
}
}

