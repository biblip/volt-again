//@ts-check

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: "20px",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function ShowComment(props) {
    const [comment] = useState(props.comment);
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Grid className={classes.root}>
            <Grid item>
                <Typography className={classes.title} color="textSecondary">
                    {comment.createdAt}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h5" component="h2">
                    {bull}{comment.content}
                </Typography>
            </Grid>
            <hr style={{border: "1px solid #EFEFEF"}}></hr>
        </Grid>
    )
}

ShowComment.propTypes = {
    comment: PropTypes.object,
}

export default ShowComment

