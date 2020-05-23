import React, {useState} from "react";
import Contact from "./Contact/Contact";
import style from "./Contacts.module.css";
import {Redirect} from "react-router-dom";

const Contacts = (props) => {

    const [searchMode, setSearchMode] = useState(false);
    const [contactsForShow, setContactsForShow] = useState(props.contacts);

    if (contactsForShow.length !== props.contacts.length && !searchMode) {
        setContactsForShow(props.contacts);
    }

    const deleteSearchContact = (contactId) => {
        if(searchMode) {
            setContactsForShow(contactsForShow.filter(contact => contact.id !== contactId));
        }
    }

    const findContacts = (event) => {
        let searchText = event.target.value;
        if (searchText) {
            setContactsForShow(props.contacts.filter(contact => contact.name.toLowerCase().includes(searchText.toLowerCase())));
            setSearchMode(true);
        } else {
            setContactsForShow(props.contacts);
            setSearchMode(false);
        }
    }

    if (!props.isAuth){
        return <Redirect to={"/login"}/>
    }

    return (
        <div>
            <h3>Contacts</h3>
            <div className={style.search}>Search:
                <input disabled={props.buttonActive}
                       placeholder={"search by name"}
                       onChange={event => findContacts(event)}
                       type="text"/>
            </div>
            <div className={style.contacts}>
                {!contactsForShow.length && searchMode
                    ? <div>Contacts not found</div>
                    : contactsForShow.map(contact => <Contact contact={contact}
                                                              key={contact.id}
                                                              deleteContact={props.deleteContact}
                                                              editContact={props.editContact}
                                                              buttonActive={props.buttonActive}
                                                              changeButtonsState={props.changeButtonsState}
                                                              deleteSearchContact={deleteSearchContact}/>)
                }
            </div>
            <button className={style.add} onClick={props.addContact} disabled={props.buttonActive || searchMode}>Add contact</button>
        </div>
    )
}

export default Contacts;