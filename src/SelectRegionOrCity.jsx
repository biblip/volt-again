//@ts-check

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Grid } from '@material-ui/core'

function SelectRegionOrCity(props) {
    const [location, setLocation] = useState(props.location);

    const [selectedRegion, setSelectedRegion] = useState(props.location?props.location.region:null);
    const [regions, setRegions] = useState([]);

    const [selectedSubregion, setSelectedSubregion] = useState(props.location?props.location.subregion:null);
    const [subregions, setSubregions] = useState([]);

    const [selectedCity, setSelectedCity] = useState(props.location?props.location.city:null);
    const [cities, setCities] = useState([]);
    function LaravelRoute(a, b) {
        return "";
    }
    function getTralato(a) {
        return a;
    }
    useEffect(() => {
        if (props.location) {
            setLocation(props.location);
        } else {
            const prev_location_str = window.localStorage.getItem('prev_location');
            if (prev_location_str) {
                const loc = JSON.parse(prev_location_str);
                if (loc) {
                    setLocation(loc);
                    setSelectedRegion(loc.region?loc.region:null);
                    setSelectedSubregion(loc.subregion?loc.subregion:null);
                    setSelectedCity(loc.city?loc.city:null);
                    window.localStorage.removeItem('prev_location');
                }
            }
        }
    }, [props.location]);

    function onRegionSelection(e, value) {
        if (value==null) {
            setLocation(null);
        } else {
            setLocation((prevState) => ({
                ...prevState,
                region: value?value:undefined,
                region_id: value?value.id:undefined,
                subregion: undefined,
                subregion_id: undefined,
                city: undefined,
                city_id: undefined,
            }));
            setSelectedRegion(value);
            setSelectedSubregion(null);
            setSelectedCity(null);
        }
    }

    function onSubregionSelection(e, value) {
        setLocation((prevState) => ({
            ...prevState,
            subregion: value,
            subregion_id: value?value.id:undefined,
            city: undefined,
            city_id: undefined,
        }));
        setSelectedSubregion(value);
        setSelectedCity(null);
    }

    function onCitySelection(e, value) {
        setLocation((prevState) => ({
            ...prevState,
            city: value,
            city_id: value?value.id:undefined,
        }));
        setSelectedCity(value);
    }

    function onChangeLocation() {
        window.localStorage.setItem('prev_location', JSON.stringify(location));
        props.onChangeLocation(location);
    }

    return (
        <Grid container direction='column' justify='space-between' spacing={3}>
            <Grid item xs>
                <Grid container direction='row'>
                    <Grid item xs={12} md={4}>
                        <div className="col align-self-center" style={{textAlign: "center"}}>
                            xxxxx
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="col align-self-center" style={{textAlign: "center"}}>
                            xxxxx
                        </div>
                    </Grid>
                    {/* <Grid item xs={12} md={3}>
                        <div className="col align-self-center" style={{textAlign: "center"}}>
                            <Asynchronous 
                                id="division" 
                                disabled={!selectedRegion}
                                src={selectedRegion && LaravelRoute('location.subregion.list', selectedRegion.id)}
                                value={selectedSubregion}
                                label={getTralato("Division")}
                                onChange={onSubregionSelection}
                                noOptionsText="No Options"
                                renderOption={(option) => (
                                        option.name
                                )}                                  
                            />
                        </div>
                    </Grid> */}
                    <Grid item xs={12} md={4}>
                        <div className="col align-self-center" style={{textAlign: "center"}}>
                            xxxxxx
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs>
                <Grid container direction="column" justify="space-between" alignItems="flex-end">
                    <Button style={{ visibility: location?'visible':'hidden' }} size='small' color='primary' onClick={onChangeLocation}>Next</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

SelectRegionOrCity.propTypes = {
    location: PropTypes.object,
    onChangeLocation: PropTypes.func.isRequired,
}

export default SelectRegionOrCity

