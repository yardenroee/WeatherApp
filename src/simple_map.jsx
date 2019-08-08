import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class SimpleMap extends Component {
    constructor(props){
        super(props);
        const {lng, lat} = this.props.data;
        this.state = {
            center: {
                lng,
                lat
            },
            zoom: 11
        };
    }

    render() {
        const{lng, lat} = this.props.data
        const center = {
            lng,
            lat
        }
        return (
            <div style={{ height: '400px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCXWQkmdPXNbv6Zj5dW3GN5mpPM1zTh7nI" }}
                    defaultCenter={center}
                    defaultZoom={this.state.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;