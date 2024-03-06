var strengthDiv = document.querySelector(".strength");
var weaknessDiv = document.querySelector(".weakness");
var oppurtunityDiv = document.querySelector(".oppurtunity");
var threatsDiv = document.querySelector(".threats");
// var newInput = document.querySelector("#newInput")
var itemToMove;

function moveTo(parent) {
    if(itemToMove){
        parent.appendChild(itemToMove);
        itemToMove = undefined;
    }
    
}

strengthDiv.addEventListener("click", (event)=>{
    moveTo(strengthDiv);
    unblurAllItems();
})
weaknessDiv.addEventListener("click", (event)=>{
    moveTo(weaknessDiv);
    unblurAllItems();
})
oppurtunityDiv.addEventListener("click", (event)=>{
    moveTo(oppurtunityDiv);
    unblurAllItems();
})
threatsDiv.addEventListener("click", (event)=>{
    moveTo(threatsDiv);
    unblurAllItems();
})



strengthDiv.style.backgroundColor = "orange";
weaknessDiv.style.backgroundColor = "blue";
oppurtunityDiv.style.backgroundColor = "yellow";
threatsDiv.style.backgroundColor = "pink";

function addItem(name, parent) {
    let newItem = document.createElement("h3"); // <h3></h3>
    newItem.innerHTML = name; // <h3>name</h3>
    newItem.classList.add("SWOTItem"); // <h3 class="SWOTItm"></h3>
    newItem.addEventListener("click", (event)=>{
        event.stopPropagation();
        blurAllItems();
        newItem.classList.remove("unFocused");
        itemToMove = newItem;
    })
    parent.appendChild(newItem);
    newInputText.value = "";
}

addItem("Tacos", oppurtunityDiv);

document.querySelector("#sButton").addEventListener("click", ()=>{
    addItem(newInputText.value, strengthDiv);
})
document.querySelector("#wButton").addEventListener("click", ()=>{
    addItem(newInputText.value, weaknessDiv);
})
document.querySelector("#oButton").addEventListener("click", ()=>{
    addItem(newInputText.value, oppurtunityDiv);
})
document.querySelector("#tButton").addEventListener("click", ()=>{
    addItem(newInputText.value, threatsDiv);
})

function blurAllItems() {
    document.querySelectorAll(".SWOTItem").forEach((node)=>{
        node.classList.add("unFocused")
    })
}
function unblurAllItems() {
    document.querySelectorAll(".SWOTItem").forEach((node)=>{
        node.classList.remove("unFocused")
    })
}
