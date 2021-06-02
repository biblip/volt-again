//@ts-check

import React, { useEffect, useState } from 'react'
import { AuthModeStrategyType } from "@aws-amplify/datastore";
import { Button, Card, CardActions, CardContent, makeStyles } from '@material-ui/core';

import awsConfig from './aws-exports';
import Amplify, { Hub } from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';

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
    const [currentUser, setCurrentUser] = useState(null);
    const classes = useStyles();

    var query = '';

    const hubAuth = (event) => {
        setCurrentUser(event.payload.data);
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

    function doSearch(query) {
        console.log("doSearch : " + query);
    }

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

    return (
        <Card>
            <CardActions>
                <Button variant="outlined" >New</Button>
                <Button variant="outlined" >Delete All</Button>
                {
                    currentUser ? <div><Button variant="outlined" onClick={signOut}>Sign Out </Button>
                    {currentUser.attributes.email}
                    </div>
                    :
                    <div>
                        <Button variant="outlined" onClick={() => signIn("user1@cuplease.com","mmmm3333")}>Sign In user1</Button>
                        <Button variant="outlined" onClick={() => signIn("user2@cuplease.com","mmmm3333")}>Sign In user2</Button>
                        <Button variant="outlined" onClick={() => signIn("user3@cuplease.com","mmmm3333")}>Sign In user3</Button>
                    </div>
                }
            </CardActions>
            <CardContent>
                <div className={classes.box}>
                    <SearchBar query={query} doSearch={doSearch}></SearchBar>
                </div>
            </CardContent>
        </Card>
    )
}

export default App

