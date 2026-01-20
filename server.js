import { renderToString } from "react-dom/server";
import Home from "./src/pages/home";

console.log(renderToString(<Home/>));