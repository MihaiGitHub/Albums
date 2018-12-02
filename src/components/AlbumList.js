import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    // Anytime that the component is about to render this lifecycle method will be called
    componentWillMount() {
        debugger;
        console.log('componentWillMount in AlbumList1111')
    }

    render() {
        return (
            <View>
                <Text>Album List!!!!</Text>
            </View>
        );
    }
}

export default AlbumList;