import {makeAutoObservable} from 'mobx';

class ModalsStore {
  restaurantClosedModal = true;
  cartModal = false;
  constructor() {
    makeAutoObservable(this);
  }
  handleRestaurantClosedModal(isVisible: boolean) {
    this.restaurantClosedModal = isVisible;
  }
  handleCartModal(isVisible: boolean) {
    this.cartModal = isVisible;
  }
}

export default new ModalsStore();
