import { configureStore } from '@reduxjs/toolkit'
import {contacts} from 'redux/contactsSlice'
import { combineReducers } from 'redux';
import {filter} from 'redux/filterSlice'
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
  
import storage from 'redux-persist/lib/storage'; 



const rootReducer = combineReducers({
    contacts: contacts.reducer,
    filter: filter.reducer,
  });
  
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
  };
  
  const persistedContactsReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: {
      contacts: persistedContactsReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
export const persistor = persistStore(store);
