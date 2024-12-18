import {makeAutoObservable} from 'mobx';

class CategoryStore {
  categorySlug = '';
  constructor() {
    makeAutoObservable(this);
  }
  changeCategory(category: string) {
    this.categorySlug = category;
  }
}

export default new CategoryStore();
