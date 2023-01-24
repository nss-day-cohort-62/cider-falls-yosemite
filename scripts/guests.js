import { getGuests } from "./database.js"



export const guestsHTML = () => {
    let guests = getGuests()
    let htmlString = `<article id="guest-list">\n<h2>Guest List</h2>\n<ul>\n`
    for (const guest of guests) {
        htmlString += `<li>${guest.name}</li>`
    }
    htmlString += `</ul>\n</article>`
    return htmlString
}