import React from 'react'
import { useSelector } from 'react-redux';
import { Card } from 'react-native-elements'

import ErrorOverlay from '../ErrorOverlay/ErrorOverlay';
import List from '../List/List'
import { AccuWeather5DayForecast } from '../../api/AccuWeather5DayForecast'
import { forecastStyles } from '../../styles/forecastStyles'

const ForecastList = () => {

    const { currentForecast } = useSelector(state => state.settingsReducer)
    const { isLoading, error, clearError } = AccuWeather5DayForecast()

    return (
        <React.Fragment>
            <ErrorOverlay error={error} clearError={clearError} />
            {!isLoading &&
                <Card containerStyle={forecastStyles.container} title='5 Day Forecast'>
                    <List content={currentForecast.DailyForecasts} type='day' scrollEnabled={true} />
                </Card>}
        </React.Fragment>
    )
}

export default ForecastList