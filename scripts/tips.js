import { getTips } from './database.js'

export const TipList = () => {
    // Invoke the function that you imported from the database module
    const tank = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipList">'

    // Create HTNL representations of each fish here
    for (const tanks of tank) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="tip card">
            <div><img  class="tip__image image--card" src="${tanks.image}" /></div>
            <div class="tip__name">${tanks.name}</div>
            <div class="tip__species">${tanks.size}</div>
            <div class="tip__length">${tanks.tip}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

