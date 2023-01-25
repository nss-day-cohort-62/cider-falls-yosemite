import { getAreaActivities, getAreas, getActivities, getGuests } from "./database.js";

const areas = getAreas()
const areaActivities = getAreaActivities()
const activities = getActivities()
const guests = getGuests()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("area")) {
            const [, areaPrimaryKey] = itemClicked.id.split("--")

            let guestsInArea = []
            for (const guest of guests) {
                if (parseInt(areaPrimaryKey) === guest.areaId) {
                    guestsInArea.push(guest)
                }
            }
            let guestCount = guestsInArea.length
            window.alert(`There are ${guestCount} guests.`)
        }
    }
)

const areaFilter = (act) => {
    let htmlString = ""
    for (const activity of activities) {
        if (act.activityId === activity.id) {
            htmlString += `<li>${activity.name}</li>\n`
        }
    }
    return htmlString
}



export const areasHTML = () => {
    let htmlString = `<article class="areas">\n`;
    for (const area of areas) {
        htmlString += `<section id="area--${area.id}">${area.name}\n`
        for (const act of areaActivities) {
            if (act.areaId === area.id) {
                const activityList = areaFilter(act)
                htmlString += activityList
            }
        }
        htmlString += `</section>\n`
    }
    htmlString += `</article>\n`
    return htmlString
}