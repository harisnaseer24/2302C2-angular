import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  myProducts:any[]=[
    {
id:1,
image:"./assets/images/prod1.jpg",
name:"The Majesty",
description:"high quality with long lasting.",
price:1800,
qty:"50 ml",
stock:10,
  },
  {
    id:2,
    image:"./assets/images/prod2.jpg",
    name:"Crown",
    description:"high quality with long lasting.",
    price:2000,
    qty:"50 ml",
    stock:0,
      },
      {
        id:3,
        image:"./assets/images/prod3.jpg",
        name:"Monarch",
        description:"high quality with long lasting.",
        price:2200,
        qty:"50 ml",
        stock:20,
          },
  


]
}
