import nav from "./nav";
import {footer} from "./footer";
import makeButton from "./button";
import {makeColorStyle} from "./button-styles";
import "../css/footer.css";
import buttonStyles from "../css/button.css";

const button = makeButton("A Button");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);
