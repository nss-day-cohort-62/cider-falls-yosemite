import { getGuests } from "./database.js"



export const guestsHTML = () => {
    let guests = getGuests()
    let htmlString = "<ul>\n"
    for (const guest of guests) {
        htmlString += `<li>${guest.name}</li>`
    }
    htmlString += `</ul>\n</article>`
    return htmlString
}