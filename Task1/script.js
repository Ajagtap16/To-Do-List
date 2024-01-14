const input=document.getElementById("input-box");
const list=document.getElementById("list-box");

//for adding task in list
function add(){
    if(input.value === ''){
        alert("This is mandatory field!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=input.value;
        list.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value="";
    saveContent();
}

list.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveContent();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveContent();
    }
},false);

function saveContent(){
    localStorage.setItem("Information" , list.innerHTML);
}
function display(){
    list.innerHTML = localStorage.getItem("Information");
}
display();