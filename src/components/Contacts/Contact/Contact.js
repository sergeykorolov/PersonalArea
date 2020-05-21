import React, {useState} from "react";
import ContactReduxForm from "./ContactForm";

const Contact = (props) => {

    let [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        console.log(formData);
        props.editContact(formData, props.contact.id);
        setEditMode(false);
    }

    const deleteContact = () => {
        props.deleteContact(props.contact.id);
    }

    const goToEditMode = () => {
        setEditMode(true);
        props.changeButtonsState(true);
    }

    return (
        <div>
            {editMode || !props.contact.name
                ? <div>
                    <ContactReduxForm initialValues={props.contact}
                                      onSubmit={onSubmit}
                                      contactId={props.contact.id}/>
                </div>
                : <div>
                    <div>
                        <button onClick={goToEditMode} disabled={props.buttonActive}>Edit</button>
                        <button onClick={deleteContact} disabled={props.buttonActive}>Delete</button>
                    </div>
                    <div>
                        <div>name: {props.contact.name}</div>
                        <div>email: {props.contact.email}</div>
                        <div>phone: {props.contact.phone}</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Contact;