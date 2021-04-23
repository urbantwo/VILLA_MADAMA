function isAttivo() {
    var elementi = document.getElementsByClassName('show');

    var temp = elementi[0].getBoundingClientRect();
    
    console.log('sotto:' + temp)
    
}

window.addEventListener('scroll', isVisibile);


 function isVisibile() {
    var bounding = document.getElementById('prova').getBoundingClientRect();
    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= ((window.innerHeight || document.documentElement.clientHeight) + document.getElementById('prova').offsetHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    ){
        console.log('é visibile!!!');
    }else{
        console.log('ora non lo è')
    };


};


