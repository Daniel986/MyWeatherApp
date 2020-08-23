import React, { useState } from 'react'
import { View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { useDispatch } from 'react-redux';

import { englishOrSpaceInput } from '../../utils/searchHelper'
import ErrorOverlay from '../ErrorOverlay/ErrorOverlay';
import List from '../List/List'
import { setCurrentLocation } from '../../redux/actions/settingsActions'
import { AccuWeatherSearch } from '../../api/AccuWeatherSearch'
import { searchStyles } from '../../styles/searchStyles'




const Search = () => {

  const dispatch = useDispatch()
  const [searchInput, setSearchInput] = useState('')
  const { isLoading, error, loadedSearch, clearError } = AccuWeatherSearch(searchInput)


  const handleSearchInputChange = (value) => {
    value = englishOrSpaceInput(value)
    if (value !== '')
      setSearchInput(value)
  }

  const handleSearchPress = (locationKey, locationCity, locationAdministrativeArea, locationCountry) => {
    dispatch(setCurrentLocation({
      Key: locationKey,
      name: locationCity,
      district: locationAdministrativeArea,
      country: locationCountry,
      isUpdated: false
    }))
    setSearchInput('')
  }

  return (
    <React.Fragment>
      <ErrorOverlay error={error} clearError={clearError} />
      <SearchBar
        placeholder='Enter location (min. 2 characters)'
        lightTheme={true}
        containerStyle={searchStyles.container}
        onChangeText={handleSearchInputChange}
        value={searchInput}
      />
      {searchInput.length > 1 && !isLoading &&
        <View style={searchStyles.listContainer}>
          <List content={loadedSearch} onPress={handleSearchPress} type='search' />
        </View>
      }
    </React.Fragment>
  )
}


export default Search