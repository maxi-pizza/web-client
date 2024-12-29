import {makeAutoObservable} from 'mobx';

class ModalsStore {
  restaurantClosedModal = true;
  cartModal = false;
  contactInformationModal = false;
  searchModal = false;
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
  handleSearchModal(isVisible: boolean) {
    this.searchModal = isVisible;
  }
}

export default new ModalsStore();
