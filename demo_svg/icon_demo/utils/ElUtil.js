/**
 * 
 * @param {string} html_str (html string)
 */
function createElByString(html_str){
    let res = document.createElement('div');
    res.innerHTML = html_str;
    return res;
}
/**
 * 
 * @param {Node} el (element)
 * @param {string} id (id string no "#")
 */
function addElById(el, id) {
    let app = document.querySelector('#'+id);
    app.appendChild(el);
}