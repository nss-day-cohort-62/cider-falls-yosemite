import { getAreas } from "./database.js";

const areas = getAreas()


export const areasHTML = () => {
    let htmlString = `<article class="areas">\n`;
    for (const area of areas) {
        htmlString += `<section id="area--${area.id}">${area.name}\n`
        for (const activity of area.activities) {
            htmlString += `<li>${activity}</li>\n`
        }
        htmlString += `</section>\n`
    }
    htmlString += `</article>\n`
    return htmlString
}