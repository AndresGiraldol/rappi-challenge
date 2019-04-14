import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[];

  constructor(public activatedRoute: ActivatedRoute, private productService: ProductsService) {
    activatedRoute.params.subscribe(params => {
      const categoria = parseInt(params.categoria, 10);
      this.buscarProductos(categoria, 'quantity', 'desc');
    });
  }

  ngOnInit() {}

  buscarProductos(categoria: number, order: string, dir: string) {
    this.productService.getProducts(categoria, order, dir).subscribe(data => { this.products = data; } );
  }

}
