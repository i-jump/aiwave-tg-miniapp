import ReactDOM from "react-dom/client";
import Router from "./router";
import { BrowserRouter } from "react-router-dom";
import "./index.less";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Vconsole from "vconsole";
import { isMobile } from "./utils";
const VITE_GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
let baseUrl = import.meta.env.VITE_BASE_URL;
if (baseUrl === "/aiWave/") {
  baseUrl = "/aiWave";
  if (isMobile()) {
    new Vconsole();
  }
}
console.log(baseUrl);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  baseUrl === "/aiWave" ? (
    <BrowserRouter basename={baseUrl || "/"}>
      <Router />
    </BrowserRouter>
  ) : (
    <GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID || ""}>
      <BrowserRouter basename={baseUrl || "/"}>
        <Router />
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
);
