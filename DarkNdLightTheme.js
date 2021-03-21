function a(x){
    return document.querySelector(x);
}

let container = a('.container');
let toggle = a('#toggle-theme');

toggle.addEventListener('click',() =>{
    let list = container.classList;
    
    if(list.contains('default')){
        list.replace('default','dark');
        toggle.textContent = 'Light';
    }
    else{
        list.replace('dark','default');
        toggle.textContent = 'Dark';
    }
})