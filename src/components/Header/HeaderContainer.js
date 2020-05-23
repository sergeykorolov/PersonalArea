import Header from "./Header";
import React from "react";
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";

const HeaderContainer = (props) => {
    return (
        <div>
            <Header isAuth={props.isAuth} logout={props.logout} buttonActive={props.buttonActive}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    buttonActive: state.contactsPage.buttonActive
})

export default connect(mapStateToProps, {logout})(HeaderContainer);