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

  setUser(user) {
    console.log('Set user');
    this.loading = false;
    this.user = user;
  }

  createUser(email: string, password: string) {
    console.log('start register');
    this.loading = true;
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log('User account created & signed in!', response);
        this.setUser(response.user);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.log(error);
        this.loading = false;
      });
  }
}

export default UserStore;
