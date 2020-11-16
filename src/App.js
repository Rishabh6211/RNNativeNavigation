import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import React from 'react';
import {Provider} from 'react-redux';
import {Root} from './config/navigation';
import store from './store/setup';
const App = () => {
  return (
    <Provider store={store}>
      <ActionSheetProvider>
        <Root />
      </ActionSheetProvider>
    </Provider>
  );
};

export default App;
