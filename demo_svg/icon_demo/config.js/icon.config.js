const icons = [{
    name: "icon_easy",
    desc: "some easy icon demo",
    data: [{
        name: "icon-location-circle",
        url: "/icon_demo/assets/icon.svg/icon-location-circle.svg"
    }],
}]

function getIconsByName(name) {
    let res = icons.find(item => {
        return item.name === name;
    });
    if (res) {
        return JSON.parse(JSON.stringify(res));
    } else {
        return null;
    }
}

