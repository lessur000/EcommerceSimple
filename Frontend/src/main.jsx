import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/Global.css";
import App from "./routes/App";

createRoot(document.getElementById("root")).render(<App />);
