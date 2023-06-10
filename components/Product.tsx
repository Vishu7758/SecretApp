import {View, Image, Text, StyleSheet} from 'react-native';

export type ProductProps = {
  name: string;
  status: string;
  imageUrl: string;
};

const Product = ({name, status, imageUrl}: ProductProps) => {
  return (
    <View style={styles.userCard}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.userImage}
      />
      <View>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.userStatus}>{status}</Text>
      </View>
    </View>
  );
};

export default Product;

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
