import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators/';
import { Products } from '../models/product.model';

@Injectable()
export class ProductsService {

  constructor(private firestore: AngularFirestore) { }


  addCategory(element: Products) {
    return this.firestore.collection('products').add(element);
  }

  getCategories() {
    return this.firestore.collection('categories').snapshotChanges().pipe(
      map (actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  addProductToCart(product: Products) {
    this.firestore.collection('shoppingCart').add(product);
  }

  getProducts(categoria: number, order: string, dir) {
    return this.firestore.collection('products', ref =>
        ref.where('sublevel_id', '==', categoria).orderBy(order, dir)).snapshotChanges().pipe(
      map (actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
}
