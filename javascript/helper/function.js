
export function el(tagname,props,dest){
    const elem = Object.assign(document.createElement(tagname),props)
    dest?.append(elem)  // Optional chaining
    return elem;
}
export function put_inside(dest,arr){
    
}