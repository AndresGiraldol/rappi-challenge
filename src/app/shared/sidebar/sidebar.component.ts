import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  activeCategory = 'Categorias';
  showLastSubLevel = false;
  indexCategory: number;

  menuCategories: Array<any> = [];
  openSideBar: boolean;

  constructor(private categoryService: ProductsService, public router: Router) { }

  ngOnInit() {

    // this.productos.forEach(element => {
    //   this.categoryService.addCategory(element);
    // });

    this.categoryService.getCategories().subscribe(data => this.menuCategories = data);
  }

  openSubMenu( menu: any, index: number ) {
    if (menu.sublevels !== undefined) {
      this.indexCategory = index;
      this.activeCategory = menu.name;
    } else {
      this.router.navigate(['productos', menu.id ]);
      this.openSideBar = false;
    }

  }

  collapseLastSubLevel(sublevel: any) {
    if (sublevel.sublevels === undefined) {
      this.router.navigate(['productos', sublevel.id]);
      this.openSideBar = false;
    }
    this.showLastSubLevel = !this.showLastSubLevel;
  }

  backCategory() {
    this.indexCategory = null;
    this. activeCategory = 'Categorias';
  }
 }
