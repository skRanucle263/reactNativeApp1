import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { PRODUCTS } from '../../../assets/products';
import { ProductListItem } from '../../components/product-list-item';
import { ListHeader } from '../../components/list-header';
const { width } = Dimensions.get('window');
const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<ListHeader />}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={styles.flatList}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  flatList: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: 'space-between',
  },
});