export const setCurrentLocation = (newLocation) => ({
    type: 'SET_CURRENT_LOCATION',
    newLocation: newLocation
  });
  
  export const setCurrentWeather = (newWeather) => ({
    type: 'SET_CURRENT_WEATHER',
    newWeather: newWeather
  });

  export const setCurrentForecast = (newForecast) => ({
    type: 'SET_CURRENT_FORECAST',
    newForecast: newForecast
  });
  