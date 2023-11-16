const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const elements = [];   
const list = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
    const listElm = document.createElement('li');
    listElm.textContent = ingredient;
    listElm.classList.add("item");
    elements.push(listElm);
};
list.append(...elements);