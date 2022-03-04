import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.scss']
})
export class FilterSideBarComponent implements OnInit {
  selectedCategory: string[];
  @Input() listCategoriesFilter: string[];
  @Output() filterArray: EventEmitter<any> = new EventEmitter();

  constructor(private shopService: ShopService) {
    this.listCategoriesFilter = [];
    this.selectedCategory = [];
    // this.shopService.myCategorys(this.selectedCategory)
  }

  ngOnInit(): void {}

  public onChangeValue(eventValue: any, categoryName: string): void {
    if (eventValue.target.checked) {
      console.log(categoryName + " checked");
      this.selectedCategory.push(categoryName);
    } else {
      console.log(categoryName + " unchecked");
      this.selectedCategory = this.selectedCategory.filter(c => c != categoryName);
    }
    // console.log(this.selectedCategory);
    this.filterArray.emit(this.selectedCategory);
  }
}
