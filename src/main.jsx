import ReactDOM from "react-dom/client";
import "./assets/styles/main.scss";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

import App from "./app/App";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
    <App />
    </Provider>
);
