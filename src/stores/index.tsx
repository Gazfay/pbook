import { createContext, useContext } from 'react';
import UserStore from './userStore';

export interface IStore {
  userStore: UserStore;
}
export const store: IStore = {
  userStore: new UserStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
