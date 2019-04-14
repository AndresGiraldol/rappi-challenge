import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  @Input() product: Products;

  @Output() addToCart = new EventEmitter();

  ngOnInit() {
  }

  addedToCart() {
    alert('Agregado al carrito');
    this.addToCart.emit();
  }

}
