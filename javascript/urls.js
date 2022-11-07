import { add_or_remove, getQueryString } from "./helper/function.js"
import header from "./comps/header.js"

export function setLocationEvent(){
    // overriding history.pushState
    const old_push = history.pushState
    history.pushState = function(...arg){
        old_push.apply(this, arg)
        window.dispatchEvent(new Event('location_change'))
    }

    // replacing history.replaceState
    const old_replace = history.replaceState
    history.replaceState = function(...arg){
        console.log(this, arg)
        old_replace.apply(this, arg)
        window.dispatchEvent(new Event('location_change'))
    }

    window.addEventListener('popstate', ()=> window.dispatchEvent(new Event('location_change')) )
    refreshPage()
}

export function refreshPage(){
    const body = document.body
    const page = getQueryString('page')

    add_or_remove(body, header, true)
    // add_or_remove(body, login, page == 'login')
    // add_or_remove(body, content, page == 'content')
    // add_or_remove(body, footer, page == 'footer')

}
