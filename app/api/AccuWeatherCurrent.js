import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentWeather } from '../redux/actions/settingsActions'
import { useHttpClient } from '../hooks/http-hook'
import { API_KEY, API_GET_WEATHER } from './constants'


export const AccuWeatherCurrent = () => {
    const dispatch = useDispatch()
    const { currentLocation } = useSelector(state => state.settingsReducer)
    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    useEffect(() => {

        if (!currentLocation.isWeatherUpdated && !isLoading) {
            const fetchWeather = async () => {
                try {
                    const responseData = await sendRequest(`${API_GET_WEATHER}${currentLocation.Key}?apikey=${API_KEY}`)
                    dispatch(setCurrentWeather(responseData[0]))
                } catch (error) {
                }
            }
            fetchWeather()
        }

    }, [currentLocation])

    return { isLoading, error, clearError }
}