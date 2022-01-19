let addTask = document.getElementById('add');
let item = document.getElementById('item');
let taskList = document.getElementById("taskList");
let itemId = 0;

addTask.addEventListener("click", function(){
    if (item.value == false){
        alert("You did not enter a task. Please try again!");
    }
    else{
       itemId = itemId++;

        var addItem = document.createElement('li');
        var x = document.createTextNode(item.value);
        var done = document.createElement('button');
        var y = document.createTextNode('Done');
        var del = document.createElement('button');
        var z = document.createTextNode('Delete');

        addItem.id = itemId;

        done.style.backgroundColor='#f89317';
        done.style.border='1px solid #454545';
        done.style.borderRadius='5px';
        done.style.float="right";
        done.style.marginRight= "5px";
        done.style.fontFamily="Lato";
        done.style.fontSize = "0.75rem";
        done.id = itemId;

        del.style.backgroundColor='#f89317';
        del.style.border='1px solid #454545';
        del.style.borderRadius='5px';
        del.style.fontFamily="Lato";
        del.style.fontSize = "0.75rem";
        del.style.float="right";
        del.id = itemId;

        console.log(item.value);
        addItem.appendChild(x);
        done.appendChild(y);
        del.appendChild(z)
        addItem.appendChild(del);
        addItem.appendChild(done);
        taskList.appendChild(addItem);
    }

    done.addEventListener("click", function(){
        addItem.style.textDecoration="line-through";
    })

    del.addEventListener("click",function(){
        addItem.parentNode.removeChild(addItem);
    })
    item.value="";
})
