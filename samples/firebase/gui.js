export function addItemRow(node, item, deleteCallback, markDoneCallback) {
    const span = createElement('span', item.done ? 'done' : '', item.name);

    const checkButton = createElement('span', 'material-symbols-outlined', 'check');
    checkButton.addEventListener('click', e => {
        markDoneCallback(item.id);
    });

    const deleteButton = createElement('span', 'material-symbols-outlined', 'delete');
    deleteButton.addEventListener('click', e => {
        deleteCallback(item.id);
    });

    const buttons = createElement('div', 'buttons d-flex justify-content-end',
        [checkButton, deleteButton]);

    const li = createElement(
        'li', 'list-group-item d-flex justify-content-between align-items-start',
        [span, buttons]);

    node.appendChild(li);
}

function createElement(name, classNames, content) {
    const element = document.createElement(name);
    element.setAttribute('class', classNames);

    if (typeof content === 'string') {
        element.innerText = content;
    } else if (Array.isArray(content)) {
        content.forEach(child => element.appendChild(child));
    }

    return element;
}