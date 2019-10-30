let icon = getIconsByName('icon_easy');
icon.data.forEach(item => {
    addIconDom(item);
})

function addIconDom(data) {
    let template = `
    <div class="icon">
        <img class="icon-img" src="${data.url}">
        <div class="icon-text">${data.name}</div>
    </div>
    `;
    addElById(createElByString(template),'container');
}
