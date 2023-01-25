import { areasHTML } from "./areas.js";
import { guestsHTML } from "./guests.js"
import { services } from "./services.js";



const mainContainer = document.querySelector("#container")

// const applicationHTML = 




mainContainer.innerHTML = `${areasHTML()}
${guestsHTML()}
${services()}
`

