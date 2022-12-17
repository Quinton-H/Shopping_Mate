let input = document.querySelector('input');
let addbtn = document.querySelector('.add-item');
let delBtn = document.querySelector('.delete-item');
let items = document.querySelector('.items');
let localItems = JSON.parse(window.localStorage.getItem('list')) || [];
listCreater();

function listCreater() {
    items.innerText = ``;
    for (let i = 0; i < localItems.length; i++) {
        let li = document.createElement('li');
        li.innerText = localItems[i];
        items.append(li);
    }
}

addbtn.addEventListener('click', () => {
    localItems.push(input.value);
    console.log(localItems);
    window.localStorage.setItem('list', JSON.stringify(localItems));
    input.value = ``;
    listCreater();
});

v

// make a delete button
// delete button needs to target text
// filter local to delete that selected item
// Update local storage then call listCreater
// has to remove item from storage