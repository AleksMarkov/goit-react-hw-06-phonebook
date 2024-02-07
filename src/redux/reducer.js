import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './constants';

const initialState = {
  contacts: [],
  filter: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const { contacts } = state;
      return { ...state, contacts: [...contacts, payload] };
    case DELETE_CONTACT:
      const newContacts = state.contacts.filter(item => item.id !== payload);
      return { ...state, contacts: newContacts };
    case SET_FILTER:
      return { ...state, filter: payload };
    default:
      return state;
  }
};

export default reducer;
