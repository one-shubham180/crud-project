
export function getEl(selector , source ){ return (source ?? document).querySelector(selector) }

export function getEls(selector , source ){ return (source ?? document).querySelectorAll(selector) }

export function el(tagname,props,dest){
    const elem = Object.assign(document.createElement(tagname),props)
    dest?.append(elem)  // Optional Chaining
    return elem;
}

export function renderPage(dest, element, attr ){
    if(attr?.replace )dest.innerHTML = ''

    if( typeof element == 'string'){
        dest.insertAdjacentHTML('beforeend', element)
    }else {
        dest.insertAdjacentElement('beforeend',element)
    }
}


export function add_or_remove(source, element, condition){
    if(condition){
        renderPage(source, element)
    }else {
        element.remove()
    }
}

export function getQueryString(key){
    const q = new URLSearchParams(location.search)
    return q.get(key)
}