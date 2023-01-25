import { areasHTML } from "./areas.js";

import { guestsHTML } from "./guests.js"
import { services } from "./services.js";


const mainContainer = document.querySelector("#container")

// const applicationHTML = 






mainContainer.innerHTML = `<h1>Services:</h1>\n
<section>${services()}</section>\n

<div id="grandparent">
<div id="areas-section">
    <h1>Areas:</h1>
    <article >${areasHTML()}</article>
</div>
<div id="guest-list">
    <h1>Guests:</h1>
    <article>${guestsHTML()}</article>
</div>
</div>`
