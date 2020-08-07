import nav from "./nav";
import {footer} from "./footer";
import makeButton from "./button";
import {makeColorStyle} from "./button-styles";
import "../css/footer.css";
import buttonStyles from "../css/button.css";
import SearchCities from './SearchCities';
import GetApiData from './GetApiData';
import React from 'react';
import {render} from 'react-dom';

const button = makeButton("A Button");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);

const App = () => {
    return (
        <div>
            <SearchCities />
            <GetApiData />
        </div>
    );
};

render(<App />, document.getElementById('root'));