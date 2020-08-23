import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

console.ignoredYellowBox = ['Warning: Failed'];

import { store, persistor } from './app/redux/store/store';
import MainNavigation from './app/navigation/index';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
       </PersistGate>
     </Provider>
  );
};


export default App


