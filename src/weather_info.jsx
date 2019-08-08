import React from 'react';
import Typography from '@material-ui/core/Typography';

class WeatherInfoComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {main, weather, name} = this.props.data;
        if(main && weather && name) {
            return (
            <div>
                <Typography variant="h4" component="h4">
                    {name}
                </Typography>

                <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}/> 
                <Typography variant="h5" component="h5">
                    {weather[0].main}
                </Typography>

                <Typography variant="h5" component="h5" style={{ padding: '20px'}}>
                    {Math.ceil(main.temp) + '°'}
                </Typography>

                <Typography variant="subtitle1" component="h2">
                    Today's High: {main.temp_max}° &nbsp; Today's Low: {main.temp_min}°
                </Typography>

                <Typography variant="subtitle2" component="h2" style={{padding: '10px'}}>
                    Humidity: {main.humidity}%
                </Typography>
            </div>
        )
        } else {
            return (
                <div>
                    <Typography variant="subtitle2`" component="h2" style={{ padding: '20px' }}>
                        The search could not return any result!
                    </Typography>
                    
                    <Typography variant="h5" component="h5" style={{ padding: '10px' }}>
                        Please be a little more specific.
                    </Typography>

                    <Typography variant="subtitle1" component="h2">
                        You can use the map to look around the globe!
                    </Typography>
                </div>
            )
        }
    }
}

export default WeatherInfoComponent;