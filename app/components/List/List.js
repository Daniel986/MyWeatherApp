import React from 'react'
import { FlatList } from 'react-native'
import { Text } from 'react-native-elements'

import SearchItem from '../Search/SearchItem'
import FavoriteWeather from '../Weather/FavoriteWeather'
import DayItem from '../Forecast/DayItem'
import { listStyles } from '../../styles/listStyles'


const List = props => {

    const { title, content, type, onPress, scrollEnabled } = props

    const renderItem = ({ item }) => {
        let itemType
        switch (type) {
            case 'search':
                itemType = <SearchItem item={item} onPress={onPress} />
                break
            case 'favorite':
                itemType = <FavoriteWeather content={item} />
                break
            case 'day':
                itemType = <DayItem item={item} onPress={onPress} />
                break
        }

        return itemType
    }

    return (
        <React.Fragment>
            {title && <Text h4>{title}</Text>}
            <FlatList
                style={type === 'day' ? listStyles.dayList : listStyles.weatherForecastList }
                keyExtractor={(item, index) => index.toString()}
                data={content}
                renderItem={renderItem}
                scrollEnabled={!!scrollEnabled}
            />
        </React.Fragment>
    )
}

export default List