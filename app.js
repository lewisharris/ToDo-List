getId = (x) => {return document.getElementById(x)}; // GetElementById shortcut function

const text = getId('textinput');
const iD = new Date().getTime();
const add = getId('add');
const list = getId('list');
const clearAll = getId('clearall')
const clearSelected = getId('clearselected');


//Add item to list
add.addEventListener('click',() => {
    event.preventDefault();
    if(text.value != ''){
        if(text.value.length > 20 ){
            text.value = 'Max 30 characters...';
            text.focus();
            return;
        };
            list.insertAdjacentHTML("beforeend",`<li class="item" id="${iD}"><span>${text.value}</span><input class="checkbox" type="checkbox" value="false"></li>`);
            text.value = '';
    }
    text.focus();
});

//Check and delete items
list.addEventListener('click',() =>{
    const e = event.target;
    if(e.type == 'checkbox'){
        eParent = e.parentNode;
        eParent.classList.toggle('checked');
        eParent.style.opacity = '0';
        setTimeout(() => { eParent.parentNode.removeChild(eParent)},350);       
    }
})

// Clear list
clearAll.addEventListener('click', () => { list.innerHTML = ''});





