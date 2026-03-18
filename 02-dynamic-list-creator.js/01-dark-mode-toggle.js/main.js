let input = document.getElementById("itemInput")
let addBtn = document.getElementById("addBtn")
let ulList = document.getElementById("list")

addBtn.addEventListener("click", () => {
    if(input.value === ""){
        alert("add item")
        return;
    }

    // create li 
    let li = document.createElement("li")
    li.textContent = input.value;

    // create Delete btn
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete");

    li.appendChild(deleteBtn)

    deleteBtn.addEventListener("click", ()=>{
        li.remove()
    })

    // create edit btn 
    li.addEventListener("dblclick", ()=>{
        const oldText = li.firstChild.textContent.trim();
        
        let editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = oldText
        

        li.insertBefore(editInput, deleteBtn)
        li.firstChild.remove();

        editInput.focus();

        const save = () => {
            const editText = editInput.value;
            
            const textNode = document.createTextNode(editText);

            li.replaceChild(textNode, editInput)
        }


        editInput.addEventListener("keydown", (e) => {
           if(e.key === "Enter"){
                save()
           }
        })

        editInput.addEventListener("blur", (e) => {
                save()
        })

    })
    
    ulList.appendChild(li);
    input.value = "";
})