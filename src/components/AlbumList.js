import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    // Anytime that the component is about to render this lifecycle method will be called
    componentWillMount() {
        // Returns a promise that .then will be called once the http call is complete
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response))
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