import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>
      <ProductList />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
