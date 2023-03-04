import {combineReducers} from '@reduxjs/toolkit'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './auth'
import transactions from './transactions'

const persistConfig = {
  key: "auth",
  storage
}
const reducer = combineReducers({
  auth: persistReducer(persistConfig, auth),
  transactions
})

export default reducer