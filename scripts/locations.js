import { getLocations } from './database.js'
export const LocationList = () => {
    const locations = getLocations() 
    let htmlString = '<article class="LocationList">'
    for (const location of locations) {htmlString += `
        <div class="location__name">${location.name}</div> 
        <div><img  class="location__image image--card" src="${location.image}" /></div>
    `}
    htmlString += `</article>`

    return htmlString
}