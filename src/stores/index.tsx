import { createContext, useContext } from 'react';
import UserStore from './userStore';

export interface Store {
  userStore: UserStore;
}
export const store: Store = {
  userStore: new UserStore(),
};

export const StoreContext = createContext(store);

const useStore = () => {
  return useContext(StoreContext);
};

export default useStore;
