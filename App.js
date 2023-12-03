import * as React from 'react';
import { AppProvider } from './app/Context/AppContext';
import AppNavigation from './app/Navigation';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (

    <AppProvider>
      <GestureHandlerRootView style={{flex:1}}>
        <BottomSheetModalProvider>
          <AppNavigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </AppProvider>
  );
}
