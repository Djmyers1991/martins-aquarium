import { FishList } from './FishList.js'
import { TipList } from './tips.js'
import {LocationList} from './locations.js'

const allFish = FishList()

for (const fish of allFish) {
    console.log(fish)
}

// Import the FishList function from the correct module

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const fishHTMLElements = FishList()
const tipsHTMLElements = TipList()
const locationsHTMLElements = LocationList()
const selected = document.querySelector("#additionHTML")

selected.innerHTML = `
${fishHTMLElements}
${tipsHTMLElements}
${locationsHTMLElements}
`



