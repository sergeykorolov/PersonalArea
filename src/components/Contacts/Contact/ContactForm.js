import {Field, reduxForm} from "redux-form";
import React from "react";

const ContactForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button>save</button>
            </div>
            <div>
                <Field required={true} placeholder={"name"} name={"name"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"email"} name={"email"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"phone"} name={"phone"} component={"input"}/>
            </div>
        </form>
    )
}

const ContactReduxForm = reduxForm({form: "contact"})(ContactForm);

export default ContactReduxForm;