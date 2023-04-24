import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AppRouter from './src/routes/AppRoutes';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <AppRouter />
    </SafeAreaView>
  );
}

export default App;
