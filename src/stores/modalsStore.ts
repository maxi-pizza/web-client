import {makeAutoObservable} from 'mobx';

class ModalsStore {
  restaurantClosedModal = true;
  constructor() {
    makeAutoObservable(this);
  }
  handleRestaurantClosedModal(isVisible: boolean) {
    this.restaurantClosedModal = isVisible;
  }
}

export default new ModalsStore();
