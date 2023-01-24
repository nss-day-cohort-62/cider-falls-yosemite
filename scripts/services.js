import { getActivities } from "./database";

const activities = getActivities()

export const services = () => {
    let assignmentHTML = '<ul>'
    

    for (const activity of activities) {
        assignmentHTML += `<li id="activity--${activity.id}">${activity.name}</li>`
    }

    assignmentHTML += '<ul>'
    return assignmentHTML
}

