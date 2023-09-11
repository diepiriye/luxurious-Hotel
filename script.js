const handBugger = document.getElementsByClassName("fa-solid fa-bars")[0];
const close = document.getElementsByClassName('fa-solid fa-xmark')[0];
const menu = document.getElementsByClassName("menu")[0];
console.log(menu);
handBugger.addEventListener('click', () => {
    menu.classList.add('open');
    handBugger.style.color = "rgba(0,0,0,0)";
})
close.addEventListener('click', () => {
    menu.classList.toggle('close');
    handBugger.style.color = "black";
})
handBugger.addEventListener('click', () => {
    menu.classList.remove('close');
})

/*const li = document.querySelectorAll('li');
console.log(li)
li.forEach(n => n.addEventListener('click', () => {
    if (menu.className === "open"){
        menu.className = "close";
    }
    else{
        menu.className = "open";
    }
}))*/