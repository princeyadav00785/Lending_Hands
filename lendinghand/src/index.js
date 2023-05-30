import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./seviceWorker";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const optionalSettings = {
  voiceName: "Karen",
  enableVoiceMessages: true,
  enableScreenshotCapture: true,
};

Kommunicate.init("1624f9a0208b5817b30319cc72fa109a2", optionalSettings);

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
