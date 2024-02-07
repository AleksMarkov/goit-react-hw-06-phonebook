import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

// import contactsReducer from './contacts/contacts-reducer';
// import filterReducer from './filter/filter.reducer';

// const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filterReducer,
//     }
// })

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
