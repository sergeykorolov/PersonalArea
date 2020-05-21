import {connect} from "react-redux";
import {addContact, changeButtonsState, deleteContact, editContact} from "../../redux/contacts-reducer";
import React from "react";
import Contacts from "./Contacts";

const ContactsContainer = (props) => {

    return (
        <div>
            <Contacts contacts={props.contacts}
                      addContact={props.addContact}
                      deleteContact={props.deleteContact}
                      editContact={props.editContact}
                      buttonActive={props.buttonActive}
                      changeButtonsState={props.changeButtonsState}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    contacts: state.contactsPage.contacts,
    buttonActive: state.contactsPage.buttonActive,
})

export default connect(mapStateToProps, {
    addContact,
    editContact,
    deleteContact,
    changeButtonsState
})(ContactsContainer);