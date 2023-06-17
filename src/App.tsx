import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import ProductList from './components/ProductList';
import Snackbar from 'react-native-snackbar';
import Config from 'react-native-config';

import {Button, Provider, Toast} from '@ant-design/react-native';

const App = () => {
  console.log(Config.VISHU);
  Snackbar.show({
    text: 'Hello world',
    duration: Snackbar.LENGTH_SHORT,
  });
  return (
    <SafeAreaView>
      <Text>App</Text>
      <ProductList />
      <Provider>
        <Button onPress={() => Toast.info('This is a toast tips')}>
          Start
        </Button>
      </Provider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
