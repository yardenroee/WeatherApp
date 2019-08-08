import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const { lng, lat } = this.props.data;
        const center = {
            lng,
            lat
        };
        const style = {
            position: 'relative',
            width: '52%',
            height: '400px'
        }
        return (
            <div>
                <Map
                    style={style}
                    google={this.props.google}
                    initialCenter={center}
                    center={center}
                    zoom={11}
                />
            </div>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCXWQkmdPXNbv6Zj5dW3GN5mpPM1zTh7nI")
})(MapContainer)