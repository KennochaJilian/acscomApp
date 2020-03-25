import React from 'react'
import { StyleSheet, View, Text, Image} from 'react-native'
import {getImageFromApi} from '../API/GetProducts'
import { TouchableOpacity } from 'react-native-gesture-handler'

class ProductItem extends React.Component {
  
  render() {
    
    const { product, displayDetailForProduct } = this.props
    return (
      <TouchableOpacity style={styles.main_container}
      onPress={() => displayDetailForProduct(product.id)}
      >
        <Image
          style={styles.image}
          source={{uri: product.images}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{product.name}</Text>
            <Text style={styles.vote_text}>{product.price} €</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{product.cardDescription}</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}> Tag : {product.tag[0].name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor : "grey"
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default ProductItem