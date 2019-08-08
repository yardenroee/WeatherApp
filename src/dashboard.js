import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import MapContainer from './simpleMap';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import WeatherInfoComponent from './weather_info';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


import {CTX} from './store';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: '50px'
    },
    bottomNav:{
        width: '100%',
        marginTop: 20
    },
    flex: {
        display: 'flex',
    },

    endTitle: {
        borderBottom: '1px dashed grey',
        paddingBottom: '10px'
    },
    weatherWindow: {
        marginTop:40,
        width: '40%',
        height: '400px',
    },
    mapWindow: {
        marginTop: 20,
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
    //Local STORE
    const [textValue, changeTextValue] = React.useState('');
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4" style={{paddingBottom: "20px"}}>
                    Yarden's Weather App
                </Typography>

                <Typography variant="h5" component="h5" className={classes.endTitle}>
                    Find out what's the weather like around the world!
                </Typography>

                <div className={classes.flex}>
                    <div className={classes.weatherWindow}>
                        <WeatherInfoComponent data={weatherInfo}/>
                        <BottomNavigation
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            showLabels
                            className={classes.bottomNav}
                        >
                            <BottomNavigationAction label="Github" onClick={() => window.open("https://github.com/yardenroee/WeatherApp", "_blank")} icon={<svg style={{ width: 32, height: 32 }} viewBox="0 0 24 24">
                                <path fill="#000000" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                            </svg>} />
                            <BottomNavigationAction label="LinkedIn" onClick={() => window.open("https://www.linkedin.com/in/yardenroee/", "_blank")} icon={<svg style={{ width: 32, height: 32 }} viewBox="0 0 24 24">
                                <path fill="#000000" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                            </svg>} />
                            <BottomNavigationAction label="Portfolio" onClick={() => window.open("https://yardenroee.com/", "_blank")} icon={<svg style={{ width: 32, height: 32 }} viewBox="0 0 24 24">
                                <path fill="#000000" d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z" />
                            </svg>} />
                        </BottomNavigation>

                    </div>

                    <div id='map' className={classes.mapWindow}>
                        <MapContainer data={weatherInfo}/>
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