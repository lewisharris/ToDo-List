getId = (x) => {return document.getElementById(x)}; // GetElementById shortcut function

/*
const add = getId('inputform');
const textinput = getId('textinput');
const ul = getId('mainListBody');

//add new item to list
add.addEventListener('submit',function(){
    event.preventDefault();
    if(textinput.value != ''){
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(textinput.value));
        li.setAttribute('class','listItem');
        ul.appendChild(li);
        textinput.innerHTML == '';
    }

});

//clear selected items from list
const deleteSelected = getId('clearselected');

deleteSelected.addEventListener('click',function(){
    for(i=0;i<ul.children.length; i++){
        if(ul.children[i].className != 'checked'){
        ul.removeChild();
        }
    }
    });


//clear all items from list
const clear = getId('clear');
clear.addEventListener('click',function(){
    ul.innerHTML = '';
    
})

*/

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
        list.insertAdjacentHTML("beforeend",`<li class="item" id="${iD}"><input class="checkbox" type="checkbox" value="false">${text.value}</li>`);
        //text.value = '';
        //text.focus();
    }
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





