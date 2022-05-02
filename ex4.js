import Item from "./Item.js";

const ul = document.getElementById('list');
const button = document.getElementById('button1');
const input = document.getElementById('input1');

let counter = 1;
let items = [new Item(counter++, 'item 1'), new Item(counter++, 'item 2')];

render(); // call render function after page is loaded.

function render() {

    // create dom element for each item in items list.

}

function addLi(item) {
    const li = document.createElement('li');
    li.innerText = item.text;
    ul.appendChild(li);
}
