
let is_sm_menu_open = false;
function sm_menu (){
    const sm_menu = document.querySelector('#menu-sm-display');
    const menu = document.querySelector('#menu');
    if(sm_menu){
        if (!is_sm_menu_open) {
            // sm_menu.classList.remove('h-0');
            // sm_menu.classList.add('h-[525px]');
            menu.style.width = "0px";
            sm_menu.style.height = "525px";
            is_sm_menu_open = true;
        } else if (is_sm_menu_open) {
            // sm_menu.classList.remove('h-[525px]');
            // sm_menu.classList.add('h-0');
            menu.style.width = "210px";
            sm_menu.style.height = "0px";
            is_sm_menu_open = false;
        }
    }
}