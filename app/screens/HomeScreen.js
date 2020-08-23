import React from 'react'
import { View } from 'react-native'

import HomeWeather from '../components/Weather/HomeWeather'
import ForecastList from '../components/Forecast/Forecast'
import Search from '../components/Search/Search'
import { homeScreenStyles } from '../styles/screenStyles'



const HomeScreen = () => {

  return (
    <View style={homeScreenStyles.container}>
      <Search />
      <HomeWeather />
      <ForecastList />
    </View>
  )
}

export default HomeScreen