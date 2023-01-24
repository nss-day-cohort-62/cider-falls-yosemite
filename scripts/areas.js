import { getAreaActivities, getAreas, getActivities } from "./database.js";

const areas = getAreas()
const areaActivities = getAreaActivities()
const activities = getActivities()


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