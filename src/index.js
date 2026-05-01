import { hydrateRoot, createRoot } from "react-dom/client";
import Home from "./pages/home";
import "./scss/style.scss";

const container = document.getElementById("app");

if (process.env.NODE_ENV) {
  const root = createRoot(container);
  root.render(<Home />);
} else {
  hydrateRoot(container, <Home />);
}
