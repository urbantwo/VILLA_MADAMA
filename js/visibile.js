function isVisibile(numero) {




    for (let i = 1; i < (numero + 1); i++) {
        let xx = document.getElementById('sli' + i).getBoundingClientRect();
        let x = document.getElementById('sli' + i);

        if (
            xx.top >= 0 &&
            xx.left >= 0 &&
            xx.bottom <= ((window.innerHeight || document.documentElement.clientHeight) + x.offsetHeight) &&
            xx.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            x.classList.add('slides');
        }
    }


};