import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../../container/pages/Home'
import DetailSurah from '../../container/pages/DetailSurah'

const Router = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    DetailSurah: {
      screen: DetailSurah
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
)

export default createAppContainer(Router)