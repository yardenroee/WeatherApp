import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
    constructor(props){
        super(props);
        const { lng, lat } = this.props.data;
        this.state = {
            center: {
            lng,
            lat,
            },
        };
    }

    componentDidUpdate(prevProps){
        if(this.props.data.name !== prevProps.data.name){
            const { lng, lat } = this.props.data;
            this.setState({center:{lng,lat}})
        }
    }
    
    render() {
        const { lng, lat } = this.props.data;

        const center = {
            lng,
            lat
        };
        const style = {
            position: 'relative',
            width: '100%',
            height: '400px'
        };
        if (lng && lat) {
            return (
                <div style={style}>
                    <Map
                        style={style}
                        google={this.props.google}
                        initialCenter={center}
                        center={center}
                        zoom={11}
                        ref={this.locationRef}
                    />
                </div>
            );
        } else {
            debugger
            return(
                <div style={style}>
                    <Map
                        style={style}
                        google={this.props.google}
                        initialCenter={this.state.center}
                        center={this.state.center}
                        zoom={11}
                        ref={this.locationRef}
                    />
                </div> 
            )
        }
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyCXWQkmdPXNbv6Zj5dW3GN5mpPM1zTh7nI")
})(MapContainer)