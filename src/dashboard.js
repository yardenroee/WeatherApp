import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SimpleMap from './simple_map';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: '50px'
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    weatherWindow: {
        width: '40%',
        height: '400px',

    },
    mapWindow: {
        width: '60%',
        height: '400px',
    },
}));

export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Yarden's Weather App
                </Typography>

                <div className={classes.flex}>
                    <div className={classes.weatherWindow}>
                        
                    </div>

                    <div id='map' className={classes.mapWindow}>
                        <SimpleMap/>
                    </div>
                </div>
            </Paper>
        </div>
    )
}