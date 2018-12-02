import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    // Initialize state
    state = { albums: [] };

    // Anytime that the component is about to render this lifecycle method will be called
    componentWillMount() {
        // Returns a promise that .then will be called once the http call is complete
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data })); // Update state
    }

    renderAlbums() {
        // Map over array of albums and return one item detail component
        return this.state.albums.map(album => <Text>{album.title}</Text>);
    }

    render() {
        console.log(this.state);

        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;