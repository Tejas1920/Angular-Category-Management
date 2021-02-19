import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryModel } from '../models/category-model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category: CategoryModel;
  @Input() id: number;
  @Output() deleteEvent = new EventEmitter();
  @Output() addSubCategoryEvent = new EventEmitter();


  editName: string;
  IsnewCategory: boolean = false;
  subCategory: CategoryModel;

  constructor() {
    this.subCategory = new CategoryModel();
  }

  ngOnInit(): void {
    this.editName = this.category.Name;
  }

  editCategory() {
    this.editName = this.category.Name;
    this.category.IsEdit = true;
  }

  saveCategory() {
    this.category.Name = this.editName;
    this.category.IsEdit = false;
  }

  cancel() {
    this.category.IsEdit = false;
  }

  deleteCategory(category: CategoryModel) {
    this.deleteEvent.emit(category);
  }

  saveSubCategory() {
    this.subCategory.Id = ++this.id;
    this.subCategory.ParentId = this.category.Id;
    this.category.SubCategories.push(this.subCategory);
    this.IsnewCategory = false;
    this.subCategory = new CategoryModel();
    this.addSubCategoryEvent.emit(this.id);
  }

}
