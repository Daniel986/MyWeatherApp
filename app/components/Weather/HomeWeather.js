import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { removeFavoriteByKey, addFavorite } from '../../redux/actions/favoritesActions'
import Weather from './Weather'
import ErrorOverlay from '../ErrorOverlay/ErrorOverlay';
import { AccuWeatherCurrent } from '../../api/AccuWeatherCurrent'


const HomeWeather = () => {

    const dispatch = useDispatch()

    const { currentLocation, currentWeather } = useSelector(state => state.settingsReducer)
    const isFavorite = useSelector(state => state.favoritesReducer.favorites)
        .find((fav) => fav.Key === currentLocation.Key)
    const { isLoading, error, clearError } = AccuWeatherCurrent()


    const handleFavoritePress = () => {
        const currentWeatherWithLocationData = { ...currentWeather, ...currentLocation }
        dispatch(isFavorite ? dispatch(removeFavoriteByKey(currentLocation.Key)) : addFavorite(currentWeatherWithLocationData))
    }

    return (
        <React.Fragment>
            <ErrorOverlay error={error} clearError={clearError} />
            {!isLoading && currentWeather.Temperature &&
                <Weather
                    weatherText={currentWeather.WeatherText}
                    temperature={currentWeather.Temperature}
                    name={currentLocation.name}
                    district={currentLocation.district}
                    country={currentLocation.country}
                    isFavorite={isFavorite}
                    handleFavoritePress={handleFavoritePress}
                    isCurrentLocation={true}
                />}
        </React.Fragment>
    )
}

export default HomeWeather

