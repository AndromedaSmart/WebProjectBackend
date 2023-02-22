const start = new Date();

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("Number").innerText = new Date().getTime() - start.getTime();
})