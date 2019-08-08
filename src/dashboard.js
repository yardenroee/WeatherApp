import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import SimpleMap from './simple_map';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import WeatherInfoComponent from './weather_info';

import {CTX} from './store';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: '50px'
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
    },

    endTitle: {
        borderBottom: '1px solid grey'
    },

    weatherWindow: {
        width: '40%',
        height: '400px',

    },
    mapWindow: {
        width: '60%',
        height: '400px',
    },
    textField: {
        width: '100%',
        marginLeft: '40%'
    }
}));

export default function Dashboard() {
    const classes = useStyles();

    //CTX STORE
    const {fetchData, weatherInfo} = React.useContext(CTX);
    console.log(weatherInfo);
    //Local STORE
    const [textValue, changeTextValue] = React.useState('');

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                    Yarden's Weather App
                </Typography>

                <Typography variant="h5" component="h5" className={classes.endTitle}>
                    Find out what's the weather like around the world!
                </Typography>

                <div className={classes.flex}>
                    <div className={classes.weatherWindow}>
                        <WeatherInfoComponent data={weatherInfo}/>
                    </div>

                    <div id='map' className={classes.mapWindow}>
                        <SimpleMap />
                    </div>
                </div>

                <div className={classes.flex}>
                    <TextField
                        className={classes.textField}
                        id="standard-dense"
                        label="Location"
                        value={textValue}
                        onChange={e => changeTextValue(e.target.value)}
                    />
                    <Button variant="contained" color="primary" className={classes.button}
                    onClick={() => {
                        fetchData(textValue);
                        changeTextValue('');
                    }}>
                        Search
                    </Button>
                </div>
            </Paper>
        </div>
    )
}