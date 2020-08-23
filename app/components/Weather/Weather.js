import React from 'react'
import { View } from 'react-native'
import { Card, Text, Divider, Icon, Button } from 'react-native-elements'

import { weatherStyles } from '../../styles/weatherStyles'


const Weather = props => {

  const {
    weatherText,
    temperature,
    name,
    district,
    country,
    isFavorite,
    handleFavoritePress,
    handleSetAsCurrentPress,
    isCurrentLocation
  } = props

  const SetCurrentButton = () => {
    return (!isCurrentLocation && handleSetAsCurrentPress && <Button title='Set as current location' onPress={handleSetAsCurrentPress} />)
  }

  return (
    <Card containerStyle={weatherStyles.container} >
      <View style={weatherStyles.section}>
        <Text h2>{name}</Text>
        <Icon
          name={(isFavorite) ? 'favorite' : 'favorite-border'}
          color='#000'
          size={40}
          onPress={handleFavoritePress}
        />
      </View>
      <Text h4>{`${district}, ${country}`}</Text>
      <Divider />
      <View style={weatherStyles.section}>
        <Text h4 style={weatherStyles.lowerText}>{`${temperature.Metric.Value}\u00b0C`}</Text>
        <Text h4 >{weatherText}</Text>
      </View>
      <SetCurrentButton />
    </Card>
  )
}

export default Weather