import React from 'react'
import { ListItem } from 'react-native-elements'


const SearchItem = props => {

    const itemData = props.item

    const handleOnPress = () => {
        props.onPress(itemData.Key, itemData.LocalizedName, itemData.AdministrativeArea.LocalizedName, itemData.Country.LocalizedName)
    }

    return (
        <ListItem
            title={`${itemData.LocalizedName}, ${itemData.AdministrativeArea.LocalizedName}`}
            subtitle={itemData.Country.LocalizedName}
            onPress={handleOnPress}
            bottomDivider
            chevron
        />
    )
}

export default SearchItem