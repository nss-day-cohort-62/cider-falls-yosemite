import { getActivities } from "./database.js";

const activities = getActivities()

export const services = () => {
    let assignmentHTML = '<ul id="activities">'
    

    for (const activity of activities) {
        assignmentHTML += `<li id="activity--${activity.id}">${activity.name}</li>`
    }

    assignmentHTML += '<ul>'
    return assignmentHTML
}

