import {makeObservable, action, observable} from 'mobx';

class ModalsStore {
  modals: string[] = [];

  constructor() {
    makeObservable(this, {
      close: action,
      open: action,
      isOpen: false,
      modals: observable,
    });
  }
  open(id: string) {
    this.modals = [...this.modals.filter(prevId => prevId !== id), id];
  }

  close(id: string) {
    this.modals = this.modals.filter(x => x !== id);
  }

  isOpen(id: string) {
    return this.modals.some(x => id === x);
  }
}

export default new ModalsStore();
