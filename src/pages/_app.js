import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
