import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native'

import {navCenterToggleStyles} from '../../styles/headerStyles'


const NavCenterToggle = props => {

    const routeNames = props.routeNames
    const nav = useNavigation()
    const route = useRoute()
    const isHome = route.name !== routeNames[1]


    const handleRouteChange = () => {
        const chosenRoute = (route.name !== routeNames[0]) ? routeNames[0] : routeNames[1]
        nav.navigate(chosenRoute)
    }

    const iconProperties = {
        size: 25,
        color: "white"
    }

    return (
        <View style={navCenterToggleStyles.container}>
            <Button
                icon={{
                    ...iconProperties,
                    name: "home",
                }}
                disabledStyle={navCenterToggleStyles.disabled}
                disabledTitleStyle={navCenterToggleStyles.disabledTitle}
                containerStyle={navCenterToggleStyles.buttonContainer}
                title={routeNames[0]}
                onPress={handleRouteChange}
                disabled={isHome}
            />
            <Button
                icon={{
                    ...iconProperties,
                    name: "favorite",
                }}
                disabledStyle={navCenterToggleStyles.disabled}
                disabledTitleStyle={navCenterToggleStyles.disabledTitle}
                containerStyle={navCenterToggleStyles.buttonContainer}
                title={routeNames[1]}
                onPress={handleRouteChange}
                disabled={!isHome}
            />
        </View>
    )
}

export default NavCenterToggle