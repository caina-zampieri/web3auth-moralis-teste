import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { MoralisProvider } from "react-moralis";

// const appId: string = process.env.REACT_APP_APP_ID || ''
// const serverUrl: string  = process.env.REACT_APP_SERVER_URL || ''

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://7edhw7vvrll0.usemoralis.com:2053/server" appId="iPmhYavaHPKCYZtJ846fgNSVmiadtbQpm2U9QmXF">
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
