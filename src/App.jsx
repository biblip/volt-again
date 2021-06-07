//@ts-check

import React, { useEffect, useState } from 'react'
import { AuthModeStrategyType } from "@aws-amplify/datastore";
import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';

import awsConfig from './aws-exports';
import Amplify, { Hub } from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';

import AddSuggestedAppLink from './AddSuggestedAppLink';
import { DataStore } from 'aws-amplify';

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
        maxWidth: '100%',
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
    const [currentUser, setCurrentUser] = useState(null);
    const classes = useStyles();

    var query = '';

    const hubAuth = (event) => {
        setCurrentUser(event.payload.data);
        console.log(event.payload.data);
    }

    useEffect(() => {
        AssessLoggedInState();
        Hub.listen('auth', hubAuth)
        return () => {
            Hub.remove('auth', hubAuth);
            //subscription.unsubscribe();
        }
    }, []);

    const AssessLoggedInState = async () => {
        Auth.currentAuthenticatedUser().then((user) => {
            setCurrentUser(user);
        }).catch(() => {
            setCurrentUser(null);
        })
    }

    // async function addProtocols() {
    //     if (false) {
    //         await DataStore.save(new Category({"shortName": "website", "name": "website", "manifest": "{\"path\":[\"user\"],\"resource\":\"name\",\"domain\":\"domain\"}"}));
    //         await DataStore.save(new Category({"shortName": "phone", "name": "phone", "manifest": "{\"domain\":\"phone\"}"}));
    //         await DataStore.save(new Category({"shortName": "address", "name": "address", "manifest": "{\"domain\":\"address\"}"}));
    //         await DataStore.save(new Category({"shortName": "licplate", "name": "vehicle plate", "manifest": "{\"domain\":\"licence plate\"}"}));
    //         await DataStore.save(new Category({"shortName": "movie", "name": "movie", "manifest": "{\"domain\":\"title\"}"}));
    //         await DataStore.save(new Category({"shortName": "book", "name": "book", "manifest": "{\"domain\":\"title\"}"}));
    //         await DataStore.save(new Category({"shortName": "song", "name": "song", "manifest": "{\"domain\":\"name\"}"}));
    //         await DataStore.save(new Category({"shortName": "tv", "name": "tv show", "manifest": "{\"domain\":\"name\"}"}));
    //         await DataStore.save(new Category({"shortName": "product", "name": "product", "manifest": "{\"domain\":\"name or barcode\"}"}));
    //         await DataStore.save(new Category({"shortName": "email", "name": "email", "manifest": "{\"domain\":\"email\"}"}));
    //         await DataStore.save(new Category({"shortName": "game", "name": "game", "manifest": "{\"domain\":\"name\"}"}));
    //         await DataStore.save(new Category({"shortName": "document", "name": "document", "manifest": "{\"domain\":\"number\"}"}));
    //         await DataStore.save(new Category({"shortName": "patent", "name": "patent", "manifest": "{\"domain\":\"number\"}"}));
    //         await DataStore.save(new Category({"shortName": "magazine", "name": "magazine", "manifest": "{\"path\":[\"article\"],\"resource\":\"title\",\"domain\":\"name\"}"}));
    //         await DataStore.save(new Category({"shortName": "paper", "name": "paper", "manifest": "{\"domain\":\"title\"}"}));
    //         await DataStore.save(new Category({"shortName": "sport", "name": "sport", "manifest": "{\"domain\":\"name\"}"}));
    //         await DataStore.save(new Category({"shortName": "cobject", "name": "celestial object", "manifest": "{\"domain\":\"name\"}"}));
    //         await DataStore.save(new Category({"shortName": "place", "name": "place", "manifest": "{\"domain\":\"name\"}"}));
    //         await DataStore.save(new Category({"shortName": "trademark", "name": "trademark", "manifest": "{\"domain\":\"trademark\"}"}));
    //         await DataStore.save(new Category({"shortName": "recipe", "name": "recipe", "manifest": "{\"domain\":\"name\"}"}));
    //         await DataStore.save(new Category({"shortName": "software", "name": "software", "manifest": "{\"path\":[\"version\"],\"resource\":\"number\",\"domain\":\"name\"}"}));
    //         await DataStore.save(new Category({"shortName": "wallet", "name": "crypto wallet", "manifest": "{\"domain\":\"wallet\"}"}));
    //         await DataStore.save(new Category({"shortName": "nft", "name": "nft", "manifest": "{\"domain\":\"nft id\"}"}));
    //         await DataStore.save(new Category({"shortName": "mistery", "name": "mistery", "manifest": "{\"domain\":\"name\"}"}));
    //         await DataStore.save(new Category({"shortName": "artwork", "name": "artwork", "manifest": "{\"domain\":\"name\"}"}));
    //         await DataStore.save(new Category({"shortName": "person", "name": "person", "manifest": "{\"domain\":\"name\"}"}));
    //         await DataStore.save(new Category({"shortName": "diamond", "name": "diamond", "manifest": "{\"domain\":\"gia or equiv\"}"}));

    //         // person, person, manifest domain: name
    //         // diamond
    //     }
    // }

    const signIn  = async (userName, password) => {
        try {
            //const user = await Auth.signIn("user1@cuplease.com","mmmm3333");
            const user = await Auth.signIn(userName, password);
            setCurrentUser(user);
        } catch (error) {
            console.log('Error signing in ', error);
        }
    }

    const signOut = async() => {
        try {
            await Auth.signOut();
            setCurrentUser(null);
        } catch (error) {
            console.log('error signing out ', error);
        }
    }

    async function clearDataStore(e) {
        await DataStore.clear();
    }

    return (
        <Card className={classes.box}>
            <CardActions>
                {
                    currentUser ? <div><Button variant="outlined" onClick={signOut}>Sign Out </Button>
                        &nbsp;&nbsp;
                        {/* {currentUser.attributes.email} */}
                        &nbsp;&nbsp;
                        {currentUser.signInUserSession.accessToken.payload["cognito:groups"]}                        
                        {/* <Button variant="outlined" onClick={() => addProtocols()}>Add Categories</Button> */}
                    </div>
                    :
                    <div>
                        <Button variant="outlined" onClick={() => signIn("user1@cuplease.com","mmmm3333")}>Sign In user 1</Button>
                        <Button variant="outlined" onClick={() => signIn("user2@cuplease.com","mmmm3333")}>Sign In user 2</Button>
                        <Button variant="outlined" onClick={() => signIn("user3@cuplease.com","mmmm3333")}>Sign In user 3</Button>
                        <Typography>To write comments, you must sign in with one of this users</Typography>
                        {/* <Button variant="outlined" onClick={() => signIn("admin1@cuplease.com","mmmm3333")}>Sign In admin 1</Button> */}
                    </div>
                }
                <Button onClick={clearDataStore}>Data errors?, Press here</Button>
            </CardActions>
            <CardContent>
                <AddSuggestedAppLink query={query}></AddSuggestedAppLink>
                {/* <div className={classes.box}>
                    <SearchBar query={query} doSearch={doSearch}></SearchBar>
                </div> */}
            </CardContent>
        </Card>
    )
}

export default App

