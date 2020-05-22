import React, {useState} from "react";
import Contact from "./Contact/Contact";
import style from "./Contacts.module.css";

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

    return (
        <div>
            <h3>Contacts:</h3>
            <div><input disabled={props.buttonActive} onChange={event => findContacts(event)} type="text"/>search</div>
            <button onClick={props.addContact} disabled={props.buttonActive || searchMode}>Add contact</button>
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
        </div>
    )
}

export default Contacts;