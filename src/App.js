import React, {Component} from 'react';
import './App.css'
import Login from "./components/Login/Login";
import {Redirect, Route, Switch} from "react-router-dom";
import ContactsContainer from "./components/Contacts/ContactsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

class App extends Component {

    render () {
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
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
