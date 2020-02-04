import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../../container/pages/Home'
import DetailSurah from '../../container/pages/DetailSurah'
import InfoSurah from '../../container/pages/InfoSurah'

const Router = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    DetailSurah: {
      screen: DetailSurah
    },
    InfoSurah: {
      screen: InfoSurah
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
)

export default createAppContainer(Router)