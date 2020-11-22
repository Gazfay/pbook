import React, { FC } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store, StoreContext } from './stores';
import Router from './Router';

const App: FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <StoreContext.Provider value={store}>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </StoreContext.Provider>
    </>
  );
};

export default App;
