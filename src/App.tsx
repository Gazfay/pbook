import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store, StoreContext } from './stores';
import Router from './Router';

const App: React.FunctionComponent<{}> = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StoreContext.Provider value={store}>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </StoreContext.Provider>
    </>
  );
};

export default App;
