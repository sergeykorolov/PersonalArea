import React, {Component} from 'react';
import Header from "./components/Header/Header";
import './App.css'
import Login from "./components/Login/Login";
import {Redirect, Route, Switch} from "react-router-dom";
import ContactsContainer from "./components/Contacts/ContactsContainer";

class App extends Component {

    render () {
        return (
            <div className="app-wrapper">
                <Header/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route path='/contacts' render={() => <ContactsContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Redirect from = '/' to = '/contacts'/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;
