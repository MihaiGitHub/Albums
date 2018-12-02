import React from 'react';
import { View } from 'react-native';

const Card = () => {
    return (
        <View style={style.containerStyle}>
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000', // Give some elevation to element
        shadowOffset: { width: 0, height: 2 }, // Specifiy what side the shadow should be on, at the bottom
        shadowOpacity: 0.1, // Make the component see through
        shadowRadius: 2, // At corners of shadow round off
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

export default Card;