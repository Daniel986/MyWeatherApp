import React from 'react'
import { Overlay, Text, Button } from 'react-native-elements'

import { errorOverlayStyles } from '../../styles/errorOverlayStyles'


const ErrorOverlay = props => {

    const { error, clearError } = props

    return (
        <Overlay overlayStyle={errorOverlayStyles.overlay} isVisible={!!error} onBackdropPress={clearError}>
            <React.Fragment>
                <Text style={errorOverlayStyles.text}>{error}</Text>
                <Button containerStyle={errorOverlayStyles.button} title='OK' onPress={clearError}></Button>
            </React.Fragment>
        </Overlay>
    )
}


export default ErrorOverlay