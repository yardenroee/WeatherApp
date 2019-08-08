import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            center: {
                lng: -73.9405301,
                lat: 40.7687653,
            },
            zoom: 11
        };
    }

    render() {
        return (
            <div style={{ height: '400px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCXWQkmdPXNbv6Zj5dW3GN5mpPM1zTh7nI" }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;