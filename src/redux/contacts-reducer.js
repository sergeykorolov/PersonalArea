const ADD_CONTACT = 'ADD-CONTACT';
const DELETE_CONTACT = 'DELETE-CONTACT';
const EDIT_CONTACT = 'EDIT-CONTACT';
const CHANGE_BUTTONS_STATE = 'CHANGE_BUTTONS_STATE';

let initialState = {
    contacts: [
        {id: 1, name: 'Cartman', email: 'cartman@gmail.com', phone: '01' },
        {id: 2, name: 'Stan', email: 'stan@gmail.com', phone: '02'},
        {id: 3, name: 'Kyle', email: 'kyle@gmail.com', phone: '03'},
        {id: 4, name: 'Kenny', email: 'kenny@gmail.com', phone: '04'},
        {id: 5, name: 'Batters', email: 'batters@gmail.com', phone: '05'}
    ],
    buttonActive: false
}

const contactsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_CONTACT: {
            let newContact = {
                id: state.contacts.length ? state.contacts[state.contacts.length-1].id+1 : 1,
                name: "",
                email: "",
                phone: ""
            };
            state.buttonActive = true;
            return {
                ...state, contacts: [...state.contacts, newContact]
            }
        }
        case EDIT_CONTACT: {
            state.buttonActive = false;
            return {
                ...state, contacts: state.contacts.map(function (contact) {
                    if (contact.id === action.contactId) {
                        contact.name = action.contactData.name;
                        contact.email = action.contactData.email;
                        contact.phone = action.contactData.phone;
                    }
                    return contact;
                })
            }
        }
        case DELETE_CONTACT: {
            state.buttonActive = false;
            return {...state, contacts: state.contacts.filter(contact => contact.id !== action.contactId)}
        }
        case CHANGE_BUTTONS_STATE: {
            return {...state, buttonActive: action.active}
        }
        default:
            return state;
    }
}

export const addContact = () => ({type: ADD_CONTACT});
export const editContact = (contactData, contactId) => ({type: EDIT_CONTACT, contactData, contactId});
export const deleteContact = (contactId) => ({type: DELETE_CONTACT, contactId});
export const changeButtonsState = (active) => ({type: CHANGE_BUTTONS_STATE, active});

export default contactsReducer;