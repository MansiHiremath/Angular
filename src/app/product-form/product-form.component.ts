import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
product:Product={productId:0,name:"T.V",brand:"Sony",price:0}
  constructor(private productService:ProductService) { }
onSubmit()
{ 
  console.log(this.product);
  this.productService.addProduct(this.product).subscribe();
}
  ngOnInit() {
  }

}
