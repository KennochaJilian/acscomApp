import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Search from '../Components/Search'
import productDetail from '../Components/productDetail'

const SearchStackNavigator = createStackNavigator({
  Search: { 
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  }, 
  productDetail: { 
  screen: productDetail
}
})

export default createAppContainer(SearchStackNavigator)