//@ts-check

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Input, InputAdornment, Typography } from '@material-ui/core'
import { DataStore, SortDirection } from 'aws-amplify';
import { AppLink, Category, CommentStatus, SingleComment } from './models';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: "100%",
    }
}));

function AddSuggestedAppLink(props) {
    const classes = useStyles();
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("none");
    const [currentDomainQuery, setCurrentDomainQuery] = useState(props.query);
    const [currentDomain, setCurrentDomain] = useState();
    const [currentSection, setCurrentSection] = useState("");
    const [currentResource, setCurrentResource] = useState("");
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const [pendingComment, setPendingComment] = useState("");

    useEffect(() => {
        if (pendingComment) {
            setNewComment("");
            setTimeout(() => {
                setPendingComment(null);
            }, 3000);
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
    }, [currentCategory, currentDomain, currentSection, currentResource]);

    async function getDomainSuggestions() {
        const models = await DataStore.query(AppLink, c => c.domain("contains", currentDomainQuery));
        const found = await DataStore.query(AppLink, c => c.domain("eq", currentDomainQuery));
        if (found.length === 1) {
            console.log(found);
            setCurrentDomain(found[0]);
        } else {
            setCurrentDomain(null);
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

        const domain = await DataStore.query(AppLink, c => c.domain("eq", currentDomainQuery).categoryID("eq", currentCategory.id));
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
                case "category": setCurrentCategory(event.target.value);
                    break;
                case "domain": setCurrentDomainQuery(event.target.value);
                    break;
                case "section": setCurrentSection(event.target.value);
                    break;
                case "section-1": setCurrentSection(event.target.value);
                    break;
                case "resource": setCurrentResource(event.target.value);
                    break;
                case "newComment": setNewComment(event.target.value);
                    break;
                default: console.log("Error");
            }
        }
    }

    const currentUser = null;

    async function addSingleComment() {
        const domain = await DataStore.query(AppLink, c => c.domain("eq", currentDomainQuery).categoryID("eq", currentCategory.id));
        var currentDomainID = null;
        if (domain.length===0) {
            var newAppLink = {};
            newAppLink.domain = currentDomainQuery;
            newAppLink.path = "";
            newAppLink.resource = "";
            newAppLink.manifest = "{}";
            newAppLink.categoryID = currentCategory.id;
            const appLink = await DataStore.save(new AppLink(newAppLink));
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
            getSingleComments();
            setPendingComment(newComment);
        });
    }

    return (
        <Grid container direction='column' justify='space-between' spacing={3}>
            <Grid item xs>
                <Grid container direction='row'>
                    <Grid item xs={12} md={3}>
                        <FormControl variant="outlined" className={classes.margin}>
                            <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                name="category"
                                value={currentCategory}
                                onChange={handleChange}
                                label="Category"
                            >
                                <MenuItem value="none">
                                    <em>none</em>
                                </MenuItem>
                                {
                                    categories.map((item, index) =>
                                        <MenuItem key={index} value={item}>{item.name}</MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FormControl className={classes.margin}>
                            <TextField
                                name="domain"
                                label={(() => {
                                    if (currentCategory.manifest) {
                                        const manifest = JSON.parse(currentCategory.manifest);
                                        return manifest.domain;
                                    } else {
                                        return "";
                                    }
                                })()}
                                value={currentDomainQuery}
                                onChange={handleChange}
                                variant="outlined"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        {
                            (() => {
                                var manifestString = "{}";
                                if (currentDomain) {
                                    if (currentDomain.manifest === manifestString) {
                                        manifestString = currentCategory.manifest;
                                    } else {
                                        manifestString = currentDomain.manifest;
                                    }
                                    //manifestString = currentDomain?currentDomain.manifest:currentCategory.manifest;
                                } else {
                                    manifestString = currentCategory.manifest;
                                }
                                if (manifestString) {
                                    const manifest = JSON.parse(manifestString);
                                    if (manifest.path) {
                                        const path = manifest.path;
                                        if (typeof path === "string") {
                                            return (
                                                <FormControl className={classes.margin}>
                                                    <TextField
                                                        name="section-1"
                                                        label={(() => {
                                                            if (currentCategory.manifest) {
                                                                const manifest = JSON.parse(currentCategory.manifest);
                                                                return manifest.path;
                                                            } else {
                                                                return "";
                                                            }
                                                        })()}
                                                        value={currentSection}
                                                        onChange={handleChange}
                                                        //helperText="Some important text"
                                                        variant="outlined"
                                                    />
                                                </FormControl>
                                            )
                                        } else {
                                            return (
                                                <FormControl variant="outlined" className={classes.margin}>
                                                    <InputLabel id="demo-simple-select-outlined-label">Section</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        name="section"
                                                        value={currentSection}
                                                        onChange={handleChange}
                                                        label="Section"
                                                    >
                                                        <MenuItem value="none">
                                                            <em>none</em>
                                                        </MenuItem>
                                                        {
                                                            path.map((item, index) =>
                                                                <MenuItem key={index} value={item}>{item}</MenuItem>
                                                            )
                                                        }
                                                    </Select>
                                                </FormControl>
                                            )
                                        }
                                    } return null
                                } else {
                                    return null
                                }
                            })()
                        }
                    </Grid>
                    <Grid item xs={12} md={3}>
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
                                                    value={currentResource}
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
            <Grid item xs>
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
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <AccountCircle />
                                  </InputAdornment>
                                ),
                              }}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FormControl className={classes.margin}>
                            <Button color="primary" variant="outlined" onClick={addSingleComment}>Add Comment</Button>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
            {
                pendingComment && <Grid item xs>
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
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Comment
                            </TableCell>
                            <TableCell>
                                Date
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            comments.map((item, index) =>
                                <TableRow key={index}>
                                    <TableCell>
                                        {item.content}
                                    </TableCell>
                                    <TableCell>
                                        {item.createdAt}
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

AddSuggestedAppLink.propTypes = {
    query: PropTypes.string
}

export default AddSuggestedAppLink

