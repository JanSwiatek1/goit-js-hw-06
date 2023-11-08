const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


      
const list = document.querySelector("#ingredients");

for (const ing of ingredients) {
    const listElm = document.createElement('li');
    listElm.textContent = ing;
    listElm.classList.add("item");
    list.append(listElm);
};