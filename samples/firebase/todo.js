
import { addItemRow } from './gui.js'
import { fetchItems, addItem,
         deleteItem, markItemDone } from './dao.js'

const listNode = document.getElementById('item-list');
const addButton = document.getElementById('add-button');
const inputBox = document.getElementById('item-name');

addButton.addEventListener('click', async e => {
    await addItem(inputBox.value);

    inputBox.value = '';

    await renderItems();
});

await renderItems();

async function renderItems() {

    const deleteCallback = async id => {
        await deleteItem(id);
        await renderItems();
    };

    const markDoneCallback = async id => {
        await markItemDone(id);
        await renderItems();
    };

    const items = await fetchItems();

    listNode.replaceChildren();

    for (const item of items) {
        addItemRow(listNode, item, deleteCallback, markDoneCallback);
    }
}
