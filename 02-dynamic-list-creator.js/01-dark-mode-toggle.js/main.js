const btn = document.getElementById("toggleButton")


btn.addEventListener("click", ()=> {
    document.body.classList.toggle("light");
    
    if(document.body.classList.contains("light")){
        btn.textContent = "Toggle Dark Mode";
    } else {
        btn.textContent = "Toggle Light Mode"
    }
})