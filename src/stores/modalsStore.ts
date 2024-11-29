import {makeAutoObservable} from 'mobx';

class ModalsStore {
  restaurantClosedModal = false;
  constructor() {
    makeAutoObservable(this);
  }
  handleRestaurantClosedModal(isVisible: boolean) {
    this.restaurantClosedModal = isVisible;
  }
}

export default new ModalsStore();
