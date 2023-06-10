import { Component } from '@angular/core';
import { Product } from '../Model/product';
import { ProductserviceService } from '../Service/productservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  product:Product=new Product();
  //router: any;
 
  constructor(private productService:ProductserviceService, private router:Router){}
  ngOnInit():void{}
  
  onSubmit(){
    this.saveProduct();
     console.log(this.product);
  }
  saveProduct(){
    this.productService.saveProduct(this.product).subscribe((data)=>{
      console.log(data);
      this.updateProductList();
    },
    
      (error)=>console.log(error)
    );
  }
  updateProductList(){
    this.router.navigate(['/product']);
  }
}
