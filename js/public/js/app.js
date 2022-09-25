// var span= document.getElementsByTagName("span");
// var spanLength = span.length;
// console.log(spanLength);
// var i;
// var deleteBtn = document.querySelectorAll(".list-container ul li button");

// var lists = document.querySelectorAll(".list-container ul li");
// console.log(lists);

// var addForm = document.forms;
// console.log(addForm);
// for(i=0; i<addForm.length; i++){
//     console.log(addForm[i].innerText);
// }

// for(i=0; i<lists.length;i++){
//     console.log(lists[i].innerHTML);
// }

// for(i = 0;i<spanLength;i++){
//     console.log(span[i].innerHTML);
// }

// for(i = 0;i<deleteBtn.length;i++){
//     console.log(deleteBtn[i].innerHTML);
// }

/*SCRIPT TO DELETE A LIST ITEM*/
var list = document.querySelector(".list-container ul");

list.addEventListener("click",function(e){
    if(e.target.tagName == "BUTTON"){
        const li = e.target.parentElement;
        const ul = li.parentNode;
        ul.removeChild(li);
    }        
});



var addInput = document.querySelector("#add_form input");
var addBtn = document.querySelector("#add_form button");
var list = document.querySelector(".list-container ul");


addBtn.addEventListener("click",function (event){
    /*SCRIPT TO ADD A LIST ITEM THROUGH INPUT FORM*/
    var text = addInput.value;
    const li = document.createElement("li");
    const spanText = document.createElement("span");
    const btn = document.createElement("button");
    spanText.innerHTML = text;
    btn.innerHTML = "delete";
    list.appendChild(li);
    li.appendChild(spanText);
    li.appendChild(btn);
    console.log(text);

    /*SCRIPT TO ADD A PARAGRAPH INNER HTML(ICON AND SUCCESS MESSAGE)*/
    tContainer = document.querySelector(".text-container");
    tContainer.style.display = "block";
});

var hideBox = document.querySelector(".check-container input");

hideBox.addEventListener("change",(e)=>{
    var container = e.target.parentElement.parentElement;
    container.classList.toggle("black-theme");
    var themeSpan = e.target.previousElementSibling;
    if(hideBox.checked){
        themeSpan.innerHTML = "Light";
    }else{
        themeSpan.innerHTML = "Dark";
    }
    
});

var searchForm = document.forms;
searchForm[0].addEventListener("input",(e)=>{
    e.preventDefault();
    const value = e.target.value.toLowerCase();
    const liText = document.querySelectorAll(".list-container ul li span");
    liText.forEach(item=>{
        const liItem= item.innerHTML.toLowerCase();
        if(liItem.indexOf(value) == -1){
           item.parentElement.style.display = "none";
        }else{
            item.parentElement.style.display = "flex";
        }
    })
})







