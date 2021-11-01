(function () {
    'use strict';

    let ul = document.getElementById('list');
    let button = document.getElementById('button1');
    let input = document.getElementById('input1');

    let counter = 1;
    let items = [new Item(counter++, 'item 1'), new Item(counter++, 'item 2')];

    render(); // call render function after page is loaded.

    function render() {

        // create dom element for each item in items list.

    }

    function addLi(item) {
        let li = document.createElement('li');
        li.innerText = item.text;
        ul.appendChild(li);
    }

    function Item(id, text) {
        this.id = id;
        this.text = text;
    }

})();
