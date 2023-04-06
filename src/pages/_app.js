import "@/styles/globals.css";
import store from "redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}
