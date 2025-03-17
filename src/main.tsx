import ReactDOM from "react-dom/client";
import AppRouter from "@routes/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.scss";
import "./services/axios-global.js";

import { store, persistor } from "@store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
store.subscribe(() => {
  console.log("Updated Redux State:", store.getState());
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
