import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems : CartItem[] = [] //diambil dari model kelas cart-item, kalau dideklarasiin any berarti gaada bedanya sama js
  // cartItems : any[]= [
    // {id:1, productId: 1, productName: 'Shoes 1', qty:4, price:100},
    // {id:2, productId: 2, productName: 'Shoes 2', qty:5, price:120},
    // {id:3, productId: 3, productName: 'Shoes 3', qty:4, price:130},
  // ];

  cartTotal = 0
  constructor(
    private msg: MessengerService,
    private cartService : CartService
    ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems(); 
  }

  handleSubscription(){
    this.msg.getMsg().subscribe((product:Product)=>{
      this.loadCartItems();
    })
  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items:Cart[])=>{
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  
  calcCartTotal(){
    this.cartTotal = 0
    this.cartItems.forEach(items=>{
      this.cartTotal += (items.qty * items.price)
    })
  }
}

