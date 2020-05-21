import React, {useState} from "react";
import Contact from "./Contact/Contact";
import style from "./Contacts.module.css";

const Contacts = (props) => {

    return (
        <div>
            <h3>Contacts:</h3>
            <button onClick={props.addContact} disabled={props.buttonActive}>Add contact</button>
            <div className={style.contacts}>
                {
                    props.contacts.map(contact => <Contact contact={contact}
                                                           key={contact.id}
                                                           deleteContact={props.deleteContact}
                                                           editContact={props.editContact}
                                                           buttonActive={props.buttonActive}
                                                           changeButtonsState={props.changeButtonsState}/>)
                }
            </div>
        </div>
    )
}

export default Contacts;