import { createReducer } from '@reduxjs/toolkit';

import { deleteContact, addContact } from './contacts-actions';

const initialState = [];

const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, { payload }) => {
      state.push(payload); // can mutate by analyse and create true command: [...state, payload]
    })
    .addCase(deleteContact, (state, { payload }) =>
      state.filter(item => item.id !== payload)
    );
});

// const initialState = [];

// const contactsReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case addContact.type:
//       return [...state, payload];
//     case deleteContact.type:
//       return state.filter(item => item.id !== payload);
//     default:
//       return state;
//   }
// };

export default contactsReducer;
