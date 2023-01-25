import { getActivities } from "./database.js";
import { getAreas } from "./database.js";
import { getAreaActivities } from "./database.js";

const areaActivities = getAreaActivities()
const areas = getAreas()
const filteredAreaActivity = (activity) => {
    let matchingActivities = []
    for (const areaActivity of areaActivities) {
        if (areaActivity.activityId === activity.id) {
            matchingActivities.push(areaActivity)
        }

    }
    return matchingActivities
}

const areaStringCreator = (matchedArray) => {
    let string = ''
    for (const match of matchedArray) {

        for (const area of areas) {
            if (area.id === match.areaId) {
                string += `${area.name}, `
            }
        }
    }
    return string
}

document.addEventListener(
    'click',
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith('activity')) {
            const [, activityId] = itemClicked.id.split("--")
            let matchingActivity = null
            let stringVariable = ''
            for (const activity of activities) {
                if (activity.id === parseInt(activityId)) {
                    matchingActivity = activity
                    const matchedAreaIds = filteredAreaActivity(matchingActivity)
                    stringVariable += areaStringCreator(matchedAreaIds)
                    window.alert(`${matchingActivity.name} is available at ${stringVariable}`)
                }
            }
        }
    }
)

const activities = getActivities()

export const services = () => {
    let assignmentHTML = '<ul id="activities">'


    for (const activity of activities) {
        assignmentHTML += `<li id="activity--${activity.id}">${activity.name}</li>`
    }

    assignmentHTML += '<ul>'
    return assignmentHTML
}

