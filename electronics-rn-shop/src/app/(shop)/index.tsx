import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PRODUCTS } from '../../../assets/products'
import { ProductListItem } from '../../components/product-list-item'
import { ListHeader } from '../../components/list-header'

const Shop = () => {
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) =><ProductListItem product={item} />
           }
        keyExtractor={item => item.id.toString()} 
        numColumns={2}
        ListHeaderComponent={<ListHeader/>}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{paddingHorizontal: 10, paddingVertical: 5}}
      />
      <Text>Shop</Text>
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: 'space-between'
  }
})