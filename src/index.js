import ReactDOM from "react-dom/client"; //import reactDOM object in package.json

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); //reactDOM library
root.render(<App />); //div will be replaced with <App from App.js file
