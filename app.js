const addButton_button= document.querySelector(".addbutton");
var inputItem_input= document.querySelector(".input");
const container_div= document.querySelector(".container");

class item{
    constructor(inputItem){
        this.createItem(inputItem);
    }

    createItem(itemName){
        let item= document.createElement("input");
        item.value= itemName;
        item.disabled= true;
        item.type= "text";
        item.classList.add("item");


        let list= document.createElement("div");
        list.classList.add("list");

        let editButton= document.createElement("button");
        editButton.innerHTML= "EDIT";
        editButton.classList.add("modifybutton");
        editButton.id= "editButton";

        let removeButton= document.createElement("button");
        removeButton.innerHTML= "REMOVE";
        removeButton.classList.add("modifybutton");
        removeButton.id= "removeButton";

        container_div.appendChild(list);

        list.appendChild(item);
        list.appendChild(editButton);
        list.appendChild(removeButton);

        editButton.addEventListener('click', ()=> this.edit(item));

        removeButton.addEventListener('click', ()=> this.remove(list));
    }

    edit(item){
        item.disabled= !item.disabled;
    }

    remove(list){
        container_div.removeChild(list);
    }

    editEnter(){
        if(event.keyCode== 13){
            this.edit(item);
        }
    }
}

function check(){
    if(inputItem_input.value!= ""){
        new item(inputItem_input.value);
        inputItem_input.value= "";
    }
}

function addEnter(){
    if(event.keyCode== 13){
        check();
    }
}

addButton_button.addEventListener('click', check);