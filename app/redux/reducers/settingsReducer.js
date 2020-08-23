
const initialState = {
    currentLocation: {
      Key: '215854', 
      name: 'Tel Aviv', 
      district: 'Tel Aviv', 
      country: 'Israel', 
      isWeatherUpdated: false,
      isForecastUpdated: false
    },
    currentWeather: {},
    currentForecast: {},
    isMetric: true
  };
  
const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_LOCATION': {
      return {
        ...state,
        currentLocation: {...action.newLocation, isWeatherUpdated: false, isForecastUpdated: false}
      }
    }

    case 'SET_CURRENT_WEATHER': {
      return {
        ...state,
        currentWeather: action.newWeather,
        currentLocation: {...state.currentLocation, isWeatherUpdated: true}
      }
    }

    case 'SET_CURRENT_FORECAST': {
        return {
          ...state,
          currentForecast: action.newForecast,
          currentLocation: {...state.currentLocation, isForecastUpdated: true}
        }
      }

    default: {
      return state;
    }
  }
};

export default settingsReducer;