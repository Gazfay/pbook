import { makeAutoObservable } from 'mobx';
import auth from '@react-native-firebase/auth';

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

  createUser(email: string, password: string) {
    console.log('start register');
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.log(error);
      });
  }
}

export default UserStore;
