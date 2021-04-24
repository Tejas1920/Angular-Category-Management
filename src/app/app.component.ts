import { Component, OnInit } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { CategoryModel } from './models/category-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Category-Management';

  categories: Array<CategoryModel>;
  category: CategoryModel;
  id = 0;
  newCategory: boolean = false;

  constructor() {
    this.categories = new Array<CategoryModel>();
    this.category = new CategoryModel();
  }

  ngOnInit() {

  }

  saveCategory() {
    this.category.Id = ++this.id;
    this.category.ParentId = 0;
    this.categories.push(this.category);
    this.newCategory = false;
    this.category = new CategoryModel();
  }

  deleteCategory(category: CategoryModel) {
    this.findAndDelete(this.categories, category);
  }

  addSubCategory($event) {
    this.id = $event;
  }

  findAndDelete(categories: Array<CategoryModel>, category: CategoryModel) {
    if (categories.findIndex(x => x.Id === category.Id) > -1) {
      categories.splice(categories.findIndex(x => x.Id === category.Id), 1);
    }
    else {
      categories.map(cat => {
        this.findAndDelete(cat.SubCategories, category);
      })
    }
  }

  CreateJSON() {

  }

}
