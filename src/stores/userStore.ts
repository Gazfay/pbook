import { makeAutoObservable } from 'mobx';

interface User {
  name: string;
  id: string;
}

class UserStore {
  user: User | null;
  loading: boolean;

  constructor() {
    this.user = null;
    this.loading = false;
    makeAutoObservable(this);
  }

  setUser(user: User): void {
    this.loading = true;
    this.user = user;
  }
}

export default UserStore;
