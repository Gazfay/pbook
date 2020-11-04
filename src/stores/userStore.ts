import { makeAutoObservable } from 'mobx';

interface IUser {
  name: string;
  id: string;
}

class UserStore {
  user: IUser | null;
  loading: boolean;

  constructor() {
    this.user = null;
    this.loading = false;
    makeAutoObservable(this);
  }

  setUser(user: IUser): void {
    this.loading = true;
    this.user = user;
  }
}

export default UserStore;
