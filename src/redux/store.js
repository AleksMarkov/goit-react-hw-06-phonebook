import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';

// import contactsReducer from './contacts/contacts-reducer';
// import filterReducer from './filter/filter.reducer';

// const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filterReducer,
//     }
// })

const store = configureStore({
  reducer: rootReducer,
});

export default store;
