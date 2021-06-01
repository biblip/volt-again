//@ts-check

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, InputAdornment, ClickAwayListener, Grid, Link } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import { useEffect } from 'react';

import AddLocationIcon from '@material-ui/icons/AddLocation';
import LocationOffIcon from '@material-ui/icons/LocationOff';
import SelectZoneList from './SelectZoneList';
import SelectRegionOrCity from './SelectRegionOrCity';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    searchBar: {
        textAlign: 'center',
        border: "1px solid lightgray",
        borderRadius: "20px",
        fontSize: "16px",
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        zIndex: '100 !important',
    },
    searchBarOpen: {
        WebkitBoxShadow: '10px 14px 29px -11px rgba(0,0,0,0.67)',
        MozBoxShadow: '10px 14px 29px -11px rgba(0,0,0,0.67)',
        boxShadow: '10px 14px 29px -11px rgba(0,0,0,0.67)',
    },
    input1: {
        height: 30,
        fontSize: "1em",
    },
    informationBox: {
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    resultlistbox: {
        width: "auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "stretch",
        alignContent: "space-around",
        margin: "5px 15px 15px 15px",
        "&>*": {
            marginTop: "10px",
            marginLeft: "5px",
        }
    },
    linkItem: {
        "&:link": {
            color: "black",
            textDecoration: "none",
            textShadow: "1px 1px #CCCCCC",
        },
        "&:visited": {
            color: "#555555",
            textDecoration: "none",
            textShadow: "2px 2px #888888",
        },
        "&:hover": {
            color: "black",
            textDecoration: "none",
            textShadow: "1px 1px #EEEEEE",
        },
        "&:active": {
            color: "black",
            textDecoration: "none",
        }
    },
    openZoneSelector: {
        width: '100%',
        backgroundColor: '#FEFEFE',
        paddingTop: '0px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingBottom: '8px',
        borderTop: '1px solid #DFDFDF',
    }
}));

var query;

function SearchBar(props) {
    const [location, setLocation] = useState(props.location);
    const [zones, setZones] = useState(props.zones);
    const [emptyQuery, setEmptyQuery] = useState(true);
    const [openZoneSelector, setOpenZoneSelector] = useState(false);
    const classes = useStyles();

    if (query===undefined) {
        query = props.query;
        checkEmptyQuery(query);
    }

    useEffect(() => {
        setLocation(props.location);
    }, [props.location]);

    useEffect(() => {
        setZones(props.zones);
    }, [props.zones]);

    useEffect(() => {
        query = props.query;
        checkEmptyQuery(query);
    }, [props.query]);

    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    function onClickAddLocation(e) {
        setOpenZoneSelector(!openZoneSelector);
    }

    const handleDelete = (deleteZone) => {
        var newZones = zones.filter((zone) => zone != deleteZone);
        if (props.onChangeZones) {
            props.onChangeZones(newZones);
        }
    };

    function onKeyUp(e) {
        if (e.key === 'Enter' && props.doSearch) {
            if (query.trim() != '') {
                props.doSearch(query);
            }
        }
    }

    function onClickSearch(e) {
        if (props.doSearch) {
            if (query.trim() != '') {
                props.doSearch(query);
            }
        }
    }

    function onChangeQuery(e) {
        query = e.target.value;
        checkEmptyQuery(query);
    }

    function checkEmptyQuery(query) {
        if (query && query.trim()!=='') {
            if (emptyQuery) {
                setEmptyQuery(false);
            }
        } else {
            if (!emptyQuery) {
                setEmptyQuery(true);
            }
        }
    }

    let searchArea = 'local';
    if (location) {
        searchArea = location.region?location.region.name:searchArea;
        searchArea = location.subregion?location.subregion.name:searchArea;
        searchArea = location.city?location.city.name:searchArea;
    }
function getTralato(a) {
    return a;
}
    return (
        <Grid container direction='row' alignItems='center'>
                <Grid item className={`${classes.searchBar} ${openZoneSelector ? classes.searchBarOpen : null}`}>
                    <Grid container direction='column'>
                        <Grid item>
                            <form noValidate autoComplete="off" onSubmit={(e)=>e.preventDefault()}>
                                <TextField
                                    id="query"
                                    style={{ width: "100%" }}
                                    placeholder={getTralato('Search for products or stores') + '...'}
                                    type="search"
                                    defaultValue={query}
                                    // onChange={(e) => { if (props.onChange) { props.onChange(e.target.value) } }}
                                    onChange={onChangeQuery}
                                    onKeyUp={onKeyUp}
                                    onFocus={(e) => { e.target.setSelectionRange(0, e.target.value.length) }}
                                    onBlur={() => {/*setSearchOnFocus(false) */ }}
                                    InputProps={{
                                        classes: { input: classes.input1 },
                                        disableUnderline: true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <div className="p-2">
                                                    {
                                                        location ? <AddLocationIcon style={{fill: "darkgray", cursor: 'pointer'}} fontSize='small' onClick={onClickAddLocation}/> : <LocationOffIcon style={{fill: "darkgray", cursor: 'pointer'}} fontSize='small' onClick={onClickAddLocation}/>
                                                    }
                                                    <SearchIcon style={{fill: "darkgray", cursor: 'pointer'}} fontSize='small' onClick={onClickSearch}/>                                            
                                                </div>
                                            </InputAdornment>
                                        ),
                                        endAdornment: (
                                            !emptyQuery || openZoneSelector ?
                                                <InputAdornment position="end">
                                                    <div className="p-2">
                                                        <CloseIcon
                                                            style={{fill: "darkgray", cursor: 'pointer'}}
                                                            fontSize='small'
                                                            onClick={() => {
                                                                if (openZoneSelector) {
                                                                    setOpenZoneSelector(false);
                                                                } else {
                                                                    var e = document.getElementById('query');
                                                                    e.value = '';
                                                                    query = '';
                                                                    setEmptyQuery(true);
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                </InputAdornment>
                                                : null
                                        ),
                                    }}
                                />
                            </form>
                        </Grid>
                    {
                        openZoneSelector &&
                        <Grid item>
                            <ClickAwayListener onClickAway={(e) => { e.preventDefault(); setOpenZoneSelector(false); }}>
                                {
                                    (() => {
                                        if (location == null) {
                                            return <Grid item>
                                                <Grid container direction='column' className={classes.openZoneSelector}>
                                                    <Grid item>
                                                        <Grid container justify='flex-start' alignItems="flex-start">
                                                            <Grid item xs>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography variant='caption'>Select region or a city to begin with</Typography>
                                                            </Grid>
                                                            <Grid item xs>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <SelectRegionOrCity onChangeLocation={props.onChangeLocation} />
                                                    </Grid>
                                                </Grid>                                                
                                            </Grid>
                                        } else {
                                            return <Grid item>
                                                <Grid container direction='column' justify='flex-start' alignItems='stretch' className={classes.openZoneSelector}>
                                                    <Grid item>
                                                        <Grid container justify='flex-start' alignItems="flex-start">
                                                            <Grid item xs>

                                                            </Grid>
                                                            <Grid item>
                                                                <Typography variant='caption'>Select :search_area's zones to search into</Typography>
                                                            </Grid>
                                                            <Grid item xs>
                                                                <Grid container alignContent='flex-end' direction='row-reverse'>
                                                                    {
                                                                        location &&
                                                                        <a href='#' onClick={(e) => { e.preventDefault(); props.onChangeLocation(null); setOpenZoneSelector(false); }}>
                                                                            <LocationOffIcon fontSize='small' />
                                                                        </a>
                                                                    }
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <SelectZoneList location={location} zones={zones} onChangeLocation={props.onChangeLocation} onChangeZones={props.onChangeZones} onDone={() => setOpenZoneSelector(false)} />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        }
                                    })()
                                }
                            </ClickAwayListener>
                        </Grid>
                    }
                    </Grid>
                </Grid>
        </Grid>
    )
}

SearchBar.propTypes = {
    location: PropTypes.object,
    zones: PropTypes.array.isRequired,
    onChangeLocation: PropTypes.func.isRequired,
    onChangeZones: PropTypes.func.isRequired,
    query: PropTypes.string,
    doSearch: PropTypes.func.isRequired,
}

export default SearchBar