import {makeAutoObservable} from 'mobx';

class ModalsStore {
  restaurantClosedModal = true;
  cartModal = false;
  contactInformationModal = false;
  constructor() {
    makeAutoObservable(this);
  }
  handleRestaurantClosedModal(isVisible: boolean) {
    this.restaurantClosedModal = isVisible;
  }
  handleCartModal(isVisible: boolean) {
    this.cartModal = isVisible;
  }
  handleContactInformationModal(isVisible: boolean) {
    this.contactInformationModal = isVisible;
  }
}

export default new ModalsStore();
