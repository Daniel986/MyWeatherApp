import { useEffect, useState } from 'react'

import { useHttpClient } from '../hooks/http-hook'
import { API_KEY, API_GET_LOCATIONS } from './constants'


export const AccuWeatherSearch = (searchInput) => {
    const [loadedSearch, setLoadedSearch] = useState()
    const { isLoading, error, sendRequest, clearError } = useHttpClient()

    
      useEffect(() => {
        if (searchInput.length > 1 && !isLoading) {
          const fetchPlaces = async () => {
            try {
              const responseData = await sendRequest(`${API_GET_LOCATIONS}?apikey=${API_KEY}&q=${searchInput}`)
              setLoadedSearch(responseData)
            } catch (error) {
            }
          }
          console.log('downloading locations')
          fetchPlaces()
        }
      }, [searchInput])


    return { isLoading, loadedSearch, error, clearError }
}