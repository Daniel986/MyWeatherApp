import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentForecast } from '../redux/actions/settingsActions'
import { useHttpClient } from '../hooks/http-hook'
import { API_KEY, API_GET_5_DAY_FORECAST } from './constants'


export const AccuWeather5DayForecast = () => {
    const dispatch = useDispatch()
    const { currentLocation, isMetric } = useSelector(state => state.settingsReducer)
    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    useEffect(() => {
        if (!currentLocation.isForecastUpdated && !isLoading) {
            const fetch5DayForecast = async () => {
                try {
                    const responseData =
                        await sendRequest(`${API_GET_5_DAY_FORECAST}${currentLocation.Key}?apikey=${API_KEY}&metric=${isMetric}`)
                    dispatch(setCurrentForecast(responseData))
                } catch (error) {
                }
            }
            fetch5DayForecast()
        }
    }, [currentLocation])


    return { isLoading, error, clearError }
}