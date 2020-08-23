import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'

import { removeFavoriteByKey } from '../../redux/actions/favoritesActions'
import { setCurrentLocation } from '../../redux/actions/settingsActions'
import Weather from './Weather'


const FavoriteWeather = props => {

    const weatherData = props.content
    const dispatch = useDispatch()
    const isCurrentLocation = useSelector(state => state.settingsReducer.currentLocation).Key === weatherData.Key
    const nav = useNavigation()

    const handleFavoritePress = () => {
        dispatch(removeFavoriteByKey(weatherData.Key))
    }

    const handleSetAsCurrentPress = () => {
        const newLocation = {
            Key: weatherData.Key,
            name: weatherData.name,
            district: weatherData.district,
            country: weatherData.country
        }
        dispatch(setCurrentLocation(newLocation))
        nav.navigate('Home')
    }

    return (
        <Weather 
        weatherText={weatherData.WeatherText}
        temperature={weatherData.Temperature}
        name={weatherData.name}
        district={weatherData.district}
        country={weatherData.country}
        isFavorite={true}
        handleFavoritePress={handleFavoritePress}
        handleSetAsCurrentPress={handleSetAsCurrentPress}
        isCurrentLocation={isCurrentLocation}
        />
    )
}

export default FavoriteWeather
