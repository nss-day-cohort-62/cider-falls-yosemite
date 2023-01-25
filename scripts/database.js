const database = {
    areas: [{
        id: 1,
        name: "Lodge"
        // activities: [5, 7, 8, 9, 10, 11]
    },{
        id: 2,
        name: "Lost Wolf Hiking Trail"
        // activities: [4, 5, 6]
    },{
        id: 3,
        name: "Chamfort River"
        // activities: [1, 2, 3]
    },{
        id: 4,
        name: "Gander River"
        // activities: [3, 4]
    },{
        id: 5,
        name: "Campgrounds"
        // activities: [7, 8, 9, 12, 13]
    },{
        id: 6,
        name: "Pine Bluffs Trail"
        // activities: [4, 5, 14, 15]
    }],
    activities: [{
        id: 1,
        name: "rafting"
        // areas: [3]
    },{
        id: 2,
        name: "canoeing"
        // areas: [3]
    },{
        id: 3,
        name: "fishing"
        // areas: [3, 4]
    },{
        id: 4,
        name: "hiking"
        // areas: [2, 4, 6]
    },{
        id: 5,
        name: "picnicking"
        // areas: [1, 2, 6]
    },{
        id: 6,
        name: "rock climbing"
        // areas: [2]
    },{
        id: 7,
        name: "lodging"
        // areas: [1, 5]
    },{
        id: 8,
        name: "parking"
        // areas: [1, 5]
    },{
        id: 9,
        name: "information"
        // areas: [1, 5]
    },{
        id: 10,
        name: "hotel"
        // areas: [1]
    },{
        id: 11,
        name: "restaurant"
        // areas: [1]
    },{
        id: 12,
        name: "office park"
        // areas: [5]
    },{
        id: 13,
        name: "children's play area"
        // areas: [5]
    },{
        id: 14,
        name: "food vendors"
        // areas: [6]
    },{
        id: 15,
        name: "ziplines"
        // areas: [6]
    }],
    areaActivity: [
        {id: 1, areaId: 1, activityId: 5},
        {id: 2, areaId: 1, activityId: 7},
        {id: 3, areaId: 1, activityId: 8},
        {id: 4, areaId: 1, activityId: 9},
        {id: 5, areaId: 1, activityId: 10},
        {id: 6, areaId: 1, activityId: 11},
        {id: 7, areaId: 2, activityId: 4},
        {id: 8, areaId: 2, activityId: 5},
        {id: 9, areaId: 2, activityId: 6},
        {id: 10, areaId: 3, activityId: 1},
        {id: 11, areaId: 3, activityId: 2},
        {id: 12, areaId: 3, activityId: 3},
        {id: 13, areaId: 4, activityId: 3},
        {id: 14, areaId: 4, activityId: 4},
        {id: 15, areaId: 5, activityId: 7},
        {id: 16, areaId: 5, activityId: 8},
        {id: 17, areaId: 5, activityId: 9},
        {id: 18, areaId: 5, activityId: 12},
        {id: 19, areaId: 5, activityId: 13},
        {id: 20, areaId: 6, activityId: 4},
        {id: 21, areaId: 6, activityId: 5},
        {id: 22, areaId: 6, activityId: 14},
        {id: 23, areaId: 6, activityId: 15}
    ],
    guests: [
        {id: 1, name: "Greg Smith", areaId: 1},
        {id: 2, name: "Vision Filler", areaId: 4},
        {id: 3, name: "Stephen Byard", areaId: 2},
        {id: 4, name: "Kristi Cornett", areaId: 5},
        {id: 5, name: "Wesley Hughes", areaId: 6},
        {id: 6, name: "Bartholemoo Diaz", areaId: 3},
        {id: 7, name: "Beth Ellis", areaId: 5},
        {id: 8, name: "Poppy Filler", areaId: 4},
        {id: 9, name: "Bosephus Johnson", areaId: 1},
        {id: 10, name: "Lady Marmalade", areaId: 5}
    ]
}


export const getAreas = () => {
    return database.areas.map(area => ({...area}))
} 
export const getAreaActivities = () => {
    return database.areaActivity.map(areaActivity => ({...areaActivity}))
} 
export const getActivities = () => {
    return database.activities.map(activity => ({...activity}))
}
export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}