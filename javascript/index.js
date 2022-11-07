import header from "./comps/header.js";
import { renderPage } from "./helper/function.js";
import { setLocationEvent } from "./urls.js";

setLocationEvent()
const body = document.body


window.addEventListener('location_change', ()=>{
    refreshPage()
})