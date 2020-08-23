import React from 'react'
import { ListItem } from 'react-native-elements'

import { dayItemStyles } from '../../styles/forecastStyles'


const DayItem = props => {

    const itemData = props.item
    const date = new Date(itemData.Date)
    const formattedDate = `${date.getDate()}.${date.getMonth() + 1}`

    return (
        <ListItem
            containerStyle={dayItemStyles.container}
            contentContainerStyle={dayItemStyles.contentContainer}
            title={`${formattedDate}\nDay - ${itemData.Day.IconPhrase}\nNight - ${itemData.Night.IconPhrase}`}
            subtitle={`${itemData.Temperature.Minimum.Value} - ${itemData.Temperature.Maximum.Value}\u00b0${itemData.Temperature.Maximum.Unit}`}
            bottomDivider={true}
        />
    )
}

export default DayItem