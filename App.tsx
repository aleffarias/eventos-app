import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { SafeAreaView } from 'react-native';
import CartProvider from './src/hooks/useCart';
import Navigation from './src/navigation';


export default function App() {
  return (
    <CartProvider>
      <Navigation />
    </CartProvider>
  );
}
