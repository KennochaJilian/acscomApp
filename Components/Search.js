// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator } from 'react-native'
import ProductItem from './productItems'

import { getProductsFromApiWithSearchedText } from '../API/GetProducts'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = ""
    // this.page = 0
    // this.totalPages = 0
    this.state = {
      product: [],
      isLoading: false
    }
  }

  _loadProducts() {
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true })
      getProductsFromApiWithSearchedText(this.searchedText).then(data => {
          this.setState({
            product: data,
            isLoading: false
          })
      })
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text 
  }

  // _searchFilms() {
  //   this.page = 0
  //   this.totalPages = 0
  //   this.setState({
  //     films: [],
  //   }, () => {
  //       this._loadFilms()
  //   })
  // }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }
  _displayDetailForProduct = (idProduct) => {
    this.props.navigation.navigate("productDetail", { idProduct: idProduct })
    ;

  }


  render() {
    //console.log(this.props.navigation)
    return (
      
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Produits à rechercher'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._loadProducts()}
        />
        <Button title='Rechercher' onPress={() => this._loadProducts()}/>
        {/* <FlatList
          data={this.state.product}
          
          
          renderItem={({ item }) => <Item title={item.name} />}
          //renderItem={({item}) => <ProductItem product={item}/>}
          // onEndReachedThreshold={0.5}
          // onEndReached={() => {
          //     if (this.page < this.totalPages) {
          //        this._loadProducts()
          //     }
          // }}
        /> */}

        <FlatList
          data={this.state.product}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <ProductItem product={item} displayDetailForProduct={this._displayDetailForProduct}/>}
        />

        {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search