import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public title: string;
  public lengthListProduct!: number;

  constructor(private shopService: ShopService) {
    this.title = ' Shop everything';
    // this.shopService.subjectListProduct$.subscribe(data => {
    //   this.lengthListProduct = data.length;
    // });
  }

  ngOnInit(): void {}
}
