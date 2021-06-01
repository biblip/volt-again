//@ts-check

import { useEffect, useState } from 'react';
import { AuthModeStrategyType, DataStore, Predicates } from "@aws-amplify/datastore";
import { Task } from './models';
import { Button, Card, CardActions, CardContent, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

import awsConfig from './aws-exports';
import Amplify, { Hub } from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';

import DeleteIcon from '@material-ui/icons/Delete';

Amplify.configure({
    ...awsConfig,
    DataStore: {
        authModeStrategyType: AuthModeStrategyType.MULTI_AUTH
    }
});

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    const [taskList, setTaskList] = useState([]);

    const hubAuth = (event) => {
        setCurrentUser(event.payload.data);
    }

    useEffect(() => {
        AssessLoggedInState();
        const subscription = DataStore.observe(Task).subscribe((msg) => {
            getTasks();
        });
        getTasks();
        Hub.listen('auth', hubAuth)
        return () => {
            Hub.remove('auth', hubAuth);
            subscription.unsubscribe();
        }
    }, []);

    const AssessLoggedInState = async () => {
        Auth.currentAuthenticatedUser().then((user) => {
            setCurrentUser(user);
        }).catch(() => {
            setCurrentUser(null);
        })
    }
    
    /*
    Amplify.configure({
        ...awsconfig,
        aws_appsync_authenticationType: isAuthenticated ? 'AMAZON_COGNITO_USER_POOLS' : 'AWS_IAM',
    });
    */

    async function getTasks() {
        const models = await DataStore.query(Task);
        setTaskList(models);
    }

    async function createTask(e) {
        const nm = Math.floor(Math.random() * 10000);
        await DataStore.save(
            new Task({
                "title": "Tarea " + nm,
                "description": "Description " + nm,
                "status": "sin terminar"
            })
        );
        getTasks();
    }

    async function deleteAll(e) {
        await DataStore.delete(Task, Predicates.ALL);
        getTasks();
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

    const clearDatastore = async () => {
        await DataStore.clear();        
    }

    const deleteItem = async (item) => {
        const modelToDelete = await DataStore.query(Task, item.id);
        DataStore.delete(modelToDelete);
    }

    return (
        <Card>
            <CardActions>
                <Button variant="outlined" onClick={createTask}>New</Button>
                <Button variant="outlined" onClick={deleteAll}>Delete All</Button>
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
                <Button variant="outlined" onClick={() => clearDatastore()}>Clear</Button>
            </CardActions>
            <CardContent>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                        <TableCell>
                                            actions
                                        </TableCell>
                                        <TableCell>
                                            id
                                        </TableCell>
                                        <TableCell>
                                            title
                                        </TableCell>
                                        <TableCell>
                                            description
                                        </TableCell>
                                        <TableCell>
                                            status
                                        </TableCell>
                                    </TableRow>
                            </TableHead>
                        <TableBody>
                        {
                            taskList.map( (item, index) => 
                                <TableRow key={index}>
                                    <TableCell>
                                        {

                                            (() => {
                                                if (currentUser) {
                                                    if (currentUser.username === item.owner) {
                                                        return <IconButton onClick={()=> deleteItem(item)}><DeleteIcon/></IconButton>
                                                    }
                                                }
                                            })()
                                        }                                        
                                    </TableCell>
                                    <TableCell>
                                        {item.id}
                                    </TableCell>
                                    <TableCell>
                                        {item.title}
                                    </TableCell>
                                    <TableCell>
                                        {item.description}
                                    </TableCell>
                                    <TableCell>
                                        {item.status}
                                    </TableCell>
                                </TableRow>
                            )
                        }
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}

export default App;