import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Product, {ProductProps} from './Product';
import axios from 'axios';

export default function ProductList() {
  const url = 'http://localhost:3004';

  const [products, setProducts] = useState<
    {
      uid: number;
      name: string;
      status: string;
      imageUrl: string;
    }[]
  >([]);

  useEffect(() => {
    axios.get(url + '/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>ContactList</Text>
      <FlatList
        data={products}
        renderItem={({item}) => {
          return (
            <Product
              name={item.name}
              status={item.status}
              imageUrl={item.imageUrl}
            />
          );
        }}
        keyExtractor={item => item.uid.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#8D3DAF',
    padding: 4,
    borderRadius: 10,
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
  },
  userStatus: {
    fontSize: 12,
  },
});
