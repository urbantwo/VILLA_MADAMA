function showmenu() {

    var menu = document.getElementsByClassName('menu');
    var foto = document.getElementsByClassName('logo-intro')
    if (scrollY > scr) {
        menu[0].classList.add('menu-active')
    } else {
        menu[0].classList.remove('menu-active')

    }
}



const scr = 150;

window.addEventListener('scroll', showmenu)




function isVisibile() {
    

    

    for (let i = 1; i < 12; i++) {
        let xx = document.getElementById('sli'+i).getBoundingClientRect(); 
        let x = document.getElementById('sli'+i); 
        
        if (
            xx.top >= 0 &&
            xx.left >= 0 &&
            xx.bottom <= ((window.innerHeight || document.documentElement.clientHeight) + x.offsetHeight) &&
            xx.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            x.classList.add('slides');
            console.log('elemento n°'+ i +' è ora visibile');
        }
        
    }
   

};