import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import List from '../components/List/List'
import { favoritesScreenStyles } from '../styles/screenStyles'


const FavoritesScreen = () => {

  const favorites = useSelector(state => state.favoritesReducer.favorites);

  return (
    <View style={favoritesScreenStyles.container}>
      {favorites.length > 0 ?
        <List content={favorites} type='favorite' scrollEnabled={true} />
        :
        <Text>Favorites are empty</Text>}
    </View>
  )
}

export default FavoritesScreen