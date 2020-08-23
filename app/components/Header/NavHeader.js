import React from 'react'
import { Header, Tooltip, Icon, Text } from 'react-native-elements'
import NavCenterToggle from './NavCenterToggle'

const NavHeader = props => {
    return (
        <Header
            centerComponent={
                <NavCenterToggle
                    currentRoute={props.currentRoute}
                    routeNames={props.routeNames}
                />
            }
            rightComponent={
                <Tooltip popover={
                    <Text style={{ color: '#fff' }}>
                        {'Theme switch\nMetric switch'}
                    </Text>}
                >
                    <Icon name='settings' color='#fff' />
                </Tooltip>
            }
        />
    )
}

export default NavHeader
