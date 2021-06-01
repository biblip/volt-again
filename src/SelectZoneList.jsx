//@ts-check

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Chip, Grid, Link, TextField, Typography, withStyles } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

import ClearAllIcon from '@material-ui/icons/ClearAll';


const LOCAL_STORE_CACHE_DURATION = 60 * 60 * 1000; // 1 hour

const GreyTextTypography = withStyles({
    root: {
        color: "#8B8B8B"
    }
})(Typography);

function SelectZoneList(props) {
    const [location, setLocation] = useState(props.location);
    const [selectedZoneList, setSelectedZoneList] = useState(props.zones);
    const [nameFilter, setNameFilter] = useState('');
    const [originalZoneList, setOriginalZoneList] = useState();
    const [tableType, setTableType] = useState();

    var unmounted = false;

    useEffect(() => {
        if (props.zones) {
            var items={};
            props.zones.map(zone => {
                items["id"+zone.id] =  zone;
            });
            setSelectedZoneList(items);
        }
    }, [props.zones]);

    useEffect(() => {
        let zonesLocalStorage;
        let zonesInfo;
        let url;
        let reload = true;
        if (location.region && location.subregion && location.city) {
            zonesLocalStorage = 'location_city_' + location.city.id;
            
        } else if (location.region && location.subregion) {
            zonesLocalStorage = 'location_subregion_' + location.subregion.id;
            
        } else if (location.region) {
            zonesLocalStorage = 'location_region_' + location.region.id;
            
        }
        zonesInfo = window.localStorage.getItem(zonesLocalStorage);
        if (zonesInfo) {
            // los zones estan en el localStorage
            const dataItem = JSON.parse(zonesInfo);
            try {
                if (dataItem.zones) {
                    if (Date.now() - dataItem.date > LOCAL_STORE_CACHE_DURATION) {
                        // paso el tiempo de cache.
                        reload = true;
                    } else {
                        reload = false;
                    }
                    setOriginalZoneList(dataItem);
                } else {
                    reload = true;
                }
            } catch (e) {
                reload = true;
            }
        } else {
            // los zones no estan en el localStorage
            reload = true;
        }
        if (reload) {
            
        }
        return () => {
            unmounted = true;
        }
    }, []);

    function onClick(zone_id) {
        if (selectedZoneList[zone_id]) {
            delete selectedZoneList[zone_id];
        } else {
            selectedZoneList[zone_id] = originalZoneList.zones[zone_id];
        }
        props.onChangeZones(Object.keys(selectedZoneList)
        .map(zone_id => {
            return selectedZoneList[zone_id];
        }));
    }
    if (!originalZoneList) {
        return null;
    }

    let timer = -1;
    function filterChange(e) {
        if (timer!==-1) {
            clearTimeout(timer);
        }
        const filterString = e.target.value;
        timer = setTimeout(() => {
            setNameFilter(filterString);
        }, 500);
    }
    function getTralato(a) {
        return a;
    }
    return (
        <Grid container direction='column'>
            <Grid item>
                <Grid container direction={tableType==='grid'?'row-reverse':'column'} justify='flex-start' alignItems="stretch">
                    <Grid item style={{ cursor: 'pointer' ,  padding: 8}}>
                        <Grid container direction="column" justify="flex-start" alignItems="center" onClick={()=> props.onChangeLocation(null)}>
                            {
                                (() => {
                                    const renderHtml = [];
                                    if (location) {
                                        if (location.region) {
                                            renderHtml.push(<Typography key={1} variant='caption'>{location.region.name}</Typography>)
                                            if (location.subregion) {
                                                renderHtml.push(<Typography key={2} variant='caption'>{location.subregion.name}</Typography>)
                                                if (location.division) {
                                                    renderHtml.push(<Typography key={2} variant='caption'>{location.division.name}</Typography>)
                                                }
                                                if (location.city) {
                                                    renderHtml.push(<Typography key={4} variant='caption'>{location.city.name}</Typography>)
                                                }
                                            }
                                        }
                                        renderHtml.push(<a href='#' key={4} onClick={(e)=> {e.preventDefault()}}> <GreyTextTypography variant='caption'>change</GreyTextTypography></a>)
                                        return renderHtml;
                                    }
                                    
                                })()
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs style={{ padding: 8}}>
                        <Grid container direction='row' justify='flex-start' alignItems='stretch'>
                            {
                                (()=> {
                                    const MAX_ITEMS = 20;
                                    let countItems = MAX_ITEMS;
                                    let foundFiltered = -MAX_ITEMS;
                                    let htmlElements = originalZoneList.originalZoneList.filter((zone, index) => { 
                                        return false;
                                    }).map((zone, index) => {
                                        const zone_id = "id"+zone.id;
                                        return <Grid item key={index}>
                                            <Chip
                                                size='small'
                                                icon={selectedZoneList[zone_id]?<DoneIcon />:<div></div>}
                                                variant='outlined'
                                                label={zone.name}
                                                onClick={() => onClick(zone_id)}
                                            />
                                        </Grid>
                                    });

                                    if (foundFiltered>0) {
                                        htmlElements.push(<Box key={9584545151} style={{ marginLeft: 16, marginRight: 16}}><GreyTextTypography variant='caption'>... ({foundFiltered})</GreyTextTypography></Box>);
                                    } else if (nameFilter==='') {
                                        let remainingItems = originalZoneList.originalZoneList.length - MAX_ITEMS;
                                        if (remainingItems > 0) {
                                            htmlElements.push(<Box key={9584545151} style={{ marginLeft: 16, marginRight: 16}}><GreyTextTypography variant='caption'>... ({remainingItems})</GreyTextTypography></Box>);
                                        }
                                    }

                                    return htmlElements;

                                })()
                                
                            }
                            <Grid item><Chip
                                size='small'
                                icon={<ClearAllIcon />}
                                label={getTralato('Clear')}
                                onClick={() => {
                                    props.onChangeZones([]);
                                }}
                            /></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction='row' alignItems="flex-end" style={{ paddingRight: 8, paddingLeft: 8, paddingBottom: 8 }}>
                    <Grid item>
                        <TextField helperText={'Zone filter / (' + originalZoneList.originalZoneList.length + ' zones)'} onChange={filterChange}></TextField>
                    </Grid>
                    <Grid item xs>
                        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                            <Button size='small' color='primary' onClick={props.onDone}>Done</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

SelectZoneList.propTypes = {
    location: PropTypes.object,
    zones: PropTypes.array.isRequired,
    onChangeLocation: PropTypes.func.isRequired,
    onChangeZones: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired,
}

export default SelectZoneList

