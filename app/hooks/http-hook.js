import { useState, useCallback, useRef, useEffect } from 'react'

export const useHttpClient = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const activeHttpRequests = useRef([])

    const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setIsLoading(true)
        const httpAbortController = new AbortController()
        activeHttpRequests.current.push(httpAbortController)

        try {
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortController.signal
            })
            const responseData = await response.json()

            activeHttpRequests.current = activeHttpRequests.current.filter(reqCtrl =>
                reqCtrl !== httpAbortController
            )

            if (!response.ok) {
                throw new Error(responseData.Message)
            }
            setIsLoading(false)
            return responseData
        } catch (error) {
            setError(error.toString() || 'Something went wrong, please check internet connection.')
            setIsLoading(false)
            throw error
        }
    }, [])

    const clearError = () => {
        setError(null)
    }

    useEffect(() => {
        return () => { //cleanup function
            // eslint-disable-next-line react-hooks/exhaustive-deps
            activeHttpRequests.current.forEach(abortController => abortController.abort())
        }
    }, [])

    return { isLoading, error, sendRequest, clearError }

}