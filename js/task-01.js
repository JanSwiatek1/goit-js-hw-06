const mainElement = document.querySelector('#categories');
const grup = mainElement.querySelectorAll("li.item");

console.log('Number of grups: ', grup.length)
for (const element of grup) {
    const category = element.querySelectorAll("ul");
    console.log('Grup: ', element.firstElementChild.textContent);
    for (const item of category) {
        console.log('Elements: ', item.children.length);
    }
};