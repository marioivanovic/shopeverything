import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.scss']
})
export class PageProductComponent implements OnInit {
  private data: any[] | undefined;
  public product: any;

  constructor(
    private shopService: ShopService,
    private active: ActivatedRoute
  ) {
    const id = this.active.snapshot.queryParamMap.get('id');

    if (id) {
      this.shopService.getById(id).subscribe(product => {
        this.data = product;
        this.product = product;
      });
    }
  }

  ngOnInit(): void {}

  // methode de cycle de vie de mon composant qui est executée juste avant que l'instance de mon composant soit détruite
  ngOnDestroy(): void {}
}
