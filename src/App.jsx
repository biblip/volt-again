//@ts-check

import React, { useEffect, useState } from 'react'
import { AuthModeStrategyType, DataStore, Predicates } from "@aws-amplify/datastore";
import { Task } from './models';
import { makeStyles, withStyles } from '@material-ui/core';

import awsConfig from './aws-exports';
import Amplify, { Hub } from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';

import DeleteIcon from '@material-ui/icons/Delete';
import SearchBar from './SearchBar';

Amplify.configure({
    ...awsConfig,
    DataStore: {
        authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
    }
});

const useStyles = makeStyles((theme) => ({
    box: {
        paddingLeft: '16px',
        paddingRight: '16px',
        maxWidth: '50%',
        margin: 'auto',
    },
    logoImage: {
        width: "150px",
        height: "auto",
        transition: 'width 1s',
        [theme.breakpoints.down('sm')]: {
            width: '80px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '40px',
        }
    },
    logoTitle: {
        fontSize: '6em',
        transition: 'font-size 1s',
        [theme.breakpoints.down('sm')]: {
            fontSize: '4em',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2em',
        }
    },
    logoTitle360: {
        fontSize: '2.5em',
        transition: 'font-size 1s',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5em',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.9em',
        }
    },
    tttt: {
        backgroundColor: 'red',
    },
    noSelect: {
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        MsUserSelect: "none",
        OUserSelect: "none",
        UserSelect: "none",
    },
    searchBar: {
        height: "50px",
        width: "60%",
        display: "block",
        margin: "auto",
        transition: 'width 1s',
        [theme.breakpoints.down('sm')]: {
            width: '85%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    selectedZonesBar: {
        width: "60%",
        display: "block",
        margin: "auto",
        transition: 'width 1s',
        [theme.breakpoints.down('sm')]: {
            width: '85%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    actionButton: {
        minWidth: '200px',
        color: "#777777",
        backgroundColor: "#F1F1F1",
        textTransform: "none",
        border: '1px solid #F1F1F1',
        fontFamily:
            '-apple-system,system-ui,BlinkMacSystemFont,' +
            '"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
        fontSize: 14,
        "&:hover": {
            border: '1px solid #CECECE',
            color: "#272727",
        }
    },
    actionBox: {
        width: '60%',
        marginTop: 16,
        marginBottom: 16,
    },
    customBadge: {
        backgroundColor: '#FEFEFE',
        color: "red"
    }
}));

function App(props) {
    const classes = useStyles();

    var query = '';

    function doSearch(query) {
        console.log("doSearch : " + query);
    }

    return (
        <div className={classes.box}>
            <SearchBar query={query} doSearch={doSearch}></SearchBar>
        </div>
    )
}

export default App

