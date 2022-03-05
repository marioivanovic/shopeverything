import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ShopService } from 'src/app/services/shop.service';
import * as _ from 'underscore';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
  private data: any | undefined;
  public listProducts!: string[];
  public listCategories!: any[];
  public listCategory!: any[];
  private subListProduct: Subscription;
  public listCategoriesFilter!: any[];
  public subListCategories!: any[];
  public listProduct!: any[];
  public term!: '';
  public listProductFiltered!: any[];
  public isAscendingSort: boolean = false;
  public table: any = [];

  min: number = 0;
  max: number = 150;
  options: Options = {
    floor: 0,
    ceil: 150,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> $' + value;
        case LabelType.High:
          return '<b>Max price:</b> $' + value;
        default:
          return '$' + value;
      }
    }
  };

  constructor(private shopService: ShopService) {
    console.log('table', this.table);
    // PRODUCTS
    this.subListProduct = this.shopService.subjectListProduct$.subscribe(
      (response: any) => {
        console.log('Response =>', response);
        this.data = response._embedded;
        this.listProducts = _.uniq(
          this.data.products.map((product: any) => product)
        );
        console.log('ListProducts =>', this.listProducts);

        //  response.length = 40; // juste pour le dev dans notre contexte d'apprentissage
        this.listProduct = [...this.data.products];
        this.listProductFiltered = this.listProduct;
      }
    );
    this.shopService.getListProductsChaud();
    // declancher la req API et la resp est transmise avec un Subject

    // CATEGORIES

    this.subListProduct = this.shopService
      .getCategories()
      .subscribe((response: any) => {
if () {

          return this.data = response._embedded;
        console.log('Categorie', this.data);

        this.listCategories = this.data.categories;
        console.log('hey', this.listCategories);

        this.listCategories = [...this.data.categories];
        this.listProductFiltered = this.listCategories;
      }

        } else {
          return this.listProduct = [...this.data.products];
        }
);

    // this.shopService.getCategories(id);
  }

  ngOnInit(): void {}
  // Methode de cycle de vie de mon composant qui est executee
  // juste avant l'instance de mon composant soit detruite

  ngOnDestroy(): void {
    this.subListProduct.unsubscribe();
  }

  addItem(term: any) {
    console.log(term);
    this.shopService.subjectListProduct$.subscribe(products => {
      if (term.trim() != '') {
        this.listProductFiltered = products.filter(product => {
          return product.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
      } else {
        this.listProduct = products;
      }
    });
    this.shopService.getListProductsChaud();
  }

  displayItem($event: any) {
    this.shopService.subjectListProduct$.subscribe(listProductFiltered => {
      this.listProductFiltered = listProductFiltered.filter(product => {
        return (
          product.unitprice_ati >= $event.value &&
          product.unitprice_ati <= $event.highValue
        );
      });
      // console.log($event.value)
      // console.log($event.highValue)
      console.log(listProductFiltered);
      this.table = [$event.value, $event.highValue];
      console.log(this.table);
    });
    this.shopService.getListProductsChaud();
  }

  onClickBtn(arr: any): void {
    console.log(`Event Change : $eventValue`);
    this.isAscendingSort != this.isAscendingSort;
    arr.sort((a: any, b: any) => {
      if (a.unitprice_ati < b.unitprice_ati) {
        return -1;
      } else if (a.unitprice_ati > b.unitprice_ati) {
        return 1;
      } else {
        return 0;
      }
    });
    return arr;
  }

  changeCategory(categories: any) {
    console.log('arrayCat', categories);
    // if (event.length !== 0) {
    //   this.listProductFiltered = this.listCategory.filter(x =>
    //     event.includes(x.breadcrumb_label)
    //   );
    //   console.log('check >', this.table[0] + ' ' + this.table[1]);

    //   this.listProductFiltered = this.listProductFiltered.filter(
    //     x =>
    //       x.unitprice_ati >= this.table[0] && x.unitprice_ati <= this.table[1]
    //   );
    // } else {
    //   this.listProductFiltered = this.listProduct;
    //   window.location.reload();
    // }

    console.log('this.', this.listProductFiltered);
    this.listProductFiltered = this.listProductFiltered.filter(product => {
        let id = product._links.self.href.split('/')[5];
        console.log('id=>', id);
        return categories.includes(parseInt(id));
      })
  }
}
