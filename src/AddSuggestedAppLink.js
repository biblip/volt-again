//@ts-check

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, InputAdornment, Typography } from '@material-ui/core'
import { DataStore, SortDirection } from 'aws-amplify';
import { AppLink, AppLinkManifest, Category, CommentStatus, SingleComment } from './models';
import MessageIcon from '@material-ui/icons/Message';
import ShowComment from './components/ShowComment';
import { Autocomplete } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: "95%",
    },
    title: {
        fontSize: 26,
    },
    subtitle: {
        fontSize: 18,
    },
}));

function AddSuggestedAppLink(props) {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("none");
    const [currentDomainQuery, setCurrentDomainQuery] = useState(props.query);
    const [currentDomain, setCurrentDomain] = useState({"domain": null, "manifest": "{}", "section": "", "resource": ""});
    const [domainSuggestions, setDomainSuggestions] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const [pendingComment, setPendingComment] = useState("");

    useEffect(() => {
        if (pendingComment) {
            setNewComment("");
            setTimeout(() => {
                setPendingComment(null);
            }, 3000);
            setComments([]);
        } else {
            getSingleComments();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pendingComment])

    useEffect(() => {
        setTimeout(() => {
            getCategories();
        }, 1000);
    }, []);

    useEffect(() => {
        if (categories.length>0) {
            getSingleComments();
        }
    }, [currentCategory, currentDomain]);

    async function getDomainSuggestions() {
        const models = await DataStore.query(AppLink, c =>
            c.categoryID("eq", currentCategory.id)
            .domain("contains", currentDomainQuery)
            .path("eq", "")
            .resource("eq", ""));
        setDomainSuggestions(models);
        const foundDomain = await DataStore.query(AppLink, c => 
            c.categoryID("eq", currentCategory.id)
            .domain("eq", currentDomainQuery)
            .path("eq", currentDomain.section)
            .resource("eq", currentDomain.resource));
        const foundDomainManifest = await DataStore.query(AppLinkManifest, c => 
            c.categoryID("eq", currentCategory.id)
            .domain("eq", currentDomainQuery));
        if (foundDomain.length===1) {
            const theManifest = (foundDomainManifest && foundDomainManifest.length===1)?foundDomainManifest[0].manifest:currentCategory.manifest;
            const theManifestObject = JSON.parse(theManifest);
            var theSection = "";
            if (theManifest && theManifestObject.path) {
                theSection = theManifestObject.path[0];
            }
            setCurrentDomain(prevState => ({
                domain: (foundDomain && foundDomain.length===1)?foundDomain[0]:null,
                manifest: theManifest,
                section: theSection,
                resource: ""
            }));
        } else {
            if (typeof currentCategory!=="string") {
                setCurrentDomain({"domain": null, "manifest": currentCategory.manifest, "section": "", "resource": ""});
            }
        }
    }

    useEffect(() => {
        getDomainSuggestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentDomainQuery])

    async function getCategories() {
        const models = await DataStore.query(Category);
        setCategories(models);
    }

    async function getSingleComments() {
        const domain = await DataStore.query(AppLink, c => 
            c.categoryID("eq", currentCategory.id)
            .domain("eq", currentDomainQuery)
            .path("eq", currentDomain.section)
            .resource("eq", currentDomain.resource));
        if (domain.length===1) {
            const models = await DataStore.query(SingleComment, 
                c => c.appLinkID("eq", domain[0].id), 
                { sort: (row) => row.createdAt(SortDirection.DESCENDING) }
            );
            setComments(models);
        } else {
            setComments([]);
        }
    }

    /*
    function addSuggestedAppLink() {
        console.log("addSuggestedAppLink " + currentCategory + ":" + currentDomainQuery + ":" + currentResource);
        DataStore.save(
            new SuggestedAppLink({
                "category": currentCategory,
                "domain": currentDomainQuery,
                "resource": currentResource
            })
        ).then((xxx) => {
            console.log("Success");
            console.log(xxx);
        }).catch((xxx) => {
            console.log("Error");
            console.log(xxx);
        })
    }
    */

    function handleChange(event) {
        if (event && event.target) {
            switch (event.target.name) {
                case "category":
                    const foundCategory = categories.filter((item) => event.target.value===item.name);
                    if (foundCategory.length===1) {
                        setCurrentCategory(foundCategory[0]);
                        try {
                            const theManifest = JSON.parse(foundCategory[0].manifest);
                            const theSection = (theManifest.path && theManifest.path.length>0)?theManifest.path[0]:"";
                            setCurrentDomain(prevState => ({
                                ...prevState,
                                manifest: foundCategory[0].manifest,
                                section: theSection,
                                resource: ""
                            }));
                        } catch {

                        }
                    }
                    break;
                case "domain": setCurrentDomainQuery(event.target.value);
                    //console.log("currentCategory");
                    //console.log(currentCategory);
                    //setCurrentDomain({"domain": null, "manifest": currentCategory.manifest, "section": "", "resource": ""});

                    //console.log("currentCategory");
                    //console.log(currentCategory);
                    //const theManifest = JSON.parse(currentCategory.manifest);
                    //const theSection = (theManifest.path && theManifest.path.length>0)?theManifest.path[0]:"";
                    //setCurrentDomain({"domain": null, "manifest": currentCategory.manifest, "section": theSection, "resource": ""});
                    break;
                case "section":
                    setCurrentDomain(prevState => ({
                        ...prevState,
                        section: event.target.value,
                        resource: ""
                    }));
                    break;
                case "resource":
                    setCurrentDomain(prevState => ({
                        ...prevState,
                        resource: event.target.value
                    }));
                    break;
                case "newComment": setNewComment(event.target.value);
                    break;
                default: console.log("Error");
            }
        }
    }

    const currentUser = null;

    async function addSingleComment() {
        const domain = await DataStore.query(AppLink, c => 
            c.categoryID("eq", currentCategory.id)
            .domain("eq", currentDomainQuery)
            .path("eq", currentDomain.section)
            .resource("eq", currentDomain.resource));
        var currentDomainID = null;
        if (domain.length===0) {
            // save the empty domain   ( path = "" and resource = "" )
            var newAppLink = {};
            newAppLink.domain = currentDomainQuery;
            newAppLink.path = "";
            newAppLink.resource = "";
            newAppLink.manifest = "{}";
            newAppLink.categoryID = currentCategory.id;
            var appLink = await DataStore.save(new AppLink(newAppLink));

            // if path != "" or resource != "" then, crea the full appLink
            if (currentDomain.section!=="" || currentDomain.resource!=="") {
                newAppLink.domain = currentDomainQuery;
                newAppLink.path = currentDomain.section;
                newAppLink.resource = currentDomain.resource;
                newAppLink.manifest = "{}";
                newAppLink.categoryID = currentCategory.id;
                appLink = await DataStore.save(new AppLink(newAppLink));
            }
            currentDomainID = appLink.id;
        } else {
            currentDomainID = domain[0].id;
        }
        
        // ya estaba el appLink creado, solo adiciona el comentario.
        var newCommentObject = {};
        newCommentObject.content = newComment;
        newCommentObject.status = CommentStatus.VISIBLE;
        newCommentObject.appLinkID = currentDomainID;
        await DataStore.save(new SingleComment(newCommentObject)).then(()=>{
            setPendingComment(newComment);
        });
    }

    function onOpenCategory(e) {
        if (categories.length===0) {
            getCategories();
        }
    }

    const showAddComment = (currentCategory.name && currentDomainQuery!=="")?true:false;

    console.log(showAddComment);

    return (
        <Grid container direction='column' justify='space-between' spacing={2}>
            <Grid item xs>
                <Grid container direction='row'>
                    <Grid>
                        <Typography className={classes.title} color="textPrimary">Select a category, and write on your favorite thing and connect with people.</Typography>
                    </Grid>
                </Grid>
                <Grid container direction='row'>
                    <Grid item xs={6} md={3}>
                        <FormControl className={classes.margin}>
                            <Autocomplete
                                options={categories.map((option) => option.name)}
                                onOpen={onOpenCategory}
                                clearOnEscape
                                selectOnFocus
                                onBlurCapture={handleChange}
                                renderInput={(params) => (
                                    <TextField {...params} name="category" label="Category" margin="normal" variant="outlined" />
                                )}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <FormControl className={classes.margin}>
                            <Autocomplete
                                options={domainSuggestions.map((option) => option.domain)}
                                freeSolo
                                onSelect={handleChange}
                                renderInput={(params) => (
                                    <TextField 
                                        {...params} 
                                        name="domain" 
                                        label={(() => {
                                                if (currentCategory.manifest) {
                                                    const manifest = JSON.parse(currentCategory.manifest);
                                                    return manifest.domain;
                                                } else {
                                                    return "";
                                                }
                                        })()}
                                        margin="normal"
                                        value={currentDomainQuery}
                                        onChange={handleChange}
                                        variant="outlined"
                                    />
                                )}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        {
                            (() => {
                                var manifestString = currentDomain.manifest;
                                if (!manifestString) return null;
                                const manifest = JSON.parse(manifestString);
                                if (manifest.path && manifest.path.length>0) {
                                    const path = manifest.path;
                                    return (
                                        <FormControl variant="outlined" className={classes.margin}>
                                            <InputLabel id="demo-simple-select-outlined-label">Section</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                name="section"
                                                value={currentDomain.section}
                                                onChange={handleChange}
                                                label="Section"
                                            >
                                                {
                                                    path.map((item, index) =>
                                                        <MenuItem key={index} value={item}>{item}</MenuItem>
                                                    )
                                                }
                                            </Select>
                                        </FormControl>
                                    )
                                }
                                return null                                
                            })()
                        }
                    </Grid>
                    <Grid item xs={6} md={3}>
                        {
                            (() => {
                                if (currentCategory.manifest) {
                                    const manifest = JSON.parse(currentCategory.manifest);
                                    if (manifest.resource) {
                                        return (
                                            <FormControl className={classes.margin}>
                                                <TextField
                                                    name="resource"
                                                    label={(() => {
                                                        if (currentCategory.manifest) {
                                                            const manifest = JSON.parse(currentCategory.manifest);
                                                            return manifest.resource;
                                                        } else {
                                                            return "";
                                                        }
                                                    })()
                                                    }
                                                    value={currentDomain.resource}
                                                    onChange={handleChange}
                                                    // helperText="Some important text"
                                                    variant="outlined"
                                                />
                                            </FormControl>
                                        )
                                    }
                                } else {
                                    return null
                                }
                            })()
                        }
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
                </Grid>
            </Grid>
            {
                showAddComment && comments && comments.length===0 && <Grid item xs>
                <Grid container direction='row'>
                    <Grid item xs={12} md>
                        <Typography className={classes.subtitle}>Be the first person commenting on this!</Typography>
                    </Grid>
                </Grid>
            </Grid>
            }

            {
                showAddComment && <Grid item xs>
                <Grid container direction='row'>
                    <Grid item xs={12} md>
                        <TextField
                            className={classes.margin}
                            id="newComment"
                            name="newComment"
                            label="Your Comment"
                            multiline
                            rows={4}
                            variant="filled"
                            value={newComment}
                            onChange={handleChange}
                            inputProps={{
                                maxLength: 300,
                            }}
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="end">
                                    <MessageIcon />
                                  </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FormControl className={classes.margin}>
                            <Button color="primary" variant="contained" onClick={addSingleComment}>Add Comment</Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            }
            {
                showAddComment && pendingComment && <Grid item xs>
                    <Grid container direction='row'>
                        <Grid item xs={12} md>
                            <Typography>Pending...{pendingComment}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            }
            {
                // currentDomain && <Grid item xs>
                //     <Grid container direction='row'>
                //         <Grid item xs={12} md>
                //             <Button>I want to receive every comment on "{currentDomain.name}"</Button>
                //         </Grid>
                //         <Grid item xs={12} md>
                //             <Button>Subscribe</Button>
                //         </Grid>
                //     </Grid>
                // </Grid>
            }
            {/* <Grid item xs>
                <Grid container direction="column" justify="space-between" alignItems="flex-end">
                    <Button style={{ visibility: true ? 'visible' : 'hidden' }} size='small' color='primary' >Next</Button>
                </Grid>
            </Grid> */}
            {
                showAddComment && <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Comment
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                comments.map((item, index) =>
                                    <TableRow key={index}>
                                        <ShowComment comment={item} />
                                    </TableRow>
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </Grid>
    )
}

AddSuggestedAppLink.propTypes = {
    query: PropTypes.string
}

export default AddSuggestedAppLink

