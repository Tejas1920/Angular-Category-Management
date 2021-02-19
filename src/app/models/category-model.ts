export class CategoryModel {
    Id: number;
    ParentId: number;
    Name: string;
    Level: number;
    IsEdit: boolean;
    SubCategories: Array<CategoryModel>;
    constructor() {
        this.SubCategories = new Array<CategoryModel>();
        this.IsEdit = false;
    }
}
