import '../styles/globals.css'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from '../src/redux/store'

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
