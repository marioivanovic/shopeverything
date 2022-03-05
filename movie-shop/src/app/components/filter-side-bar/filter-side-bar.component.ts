import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.scss']
})
export class FilterSideBarComponent implements OnInit {
  selectedCategory: any[] = [];
  @Input() listCategoriesFilter!: any[];
  @Output() filterArray: EventEmitter<any> = new EventEmitter();

  constructor(private shopService: ShopService) {
    // this.listCategoriesFilter = [];
    // this.selectedCategory = [];
    // this.shopService.myCategorys(this.selectedCategory)
  }

  ngOnInit(): void {}

  public onChangeValue(eventValue: any, categoryId: any): void {
    if (eventValue.target.checked) {
      console.log(eventValue.target.value + ' checked');
      this.selectedCategory.push(categoryId);
    } else {
      let index = this.selectedCategory.findIndex(
        category => category == eventValue.target.value
      );
      this.selectedCategory.splice(index, 1);
    }
    // console.log(this.selectedCategory);
    this.filterArray.emit(this.selectedCategory);
  }
}
