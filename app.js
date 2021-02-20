document.addEventListener('scroll', ()=> {
    let top  = window.pageYOffset + window.innerHeight;
    let  isPhoneVisible = top > document.querySelector('.main-steps').offsetTop;
    let isCitiesVisible = top > document.querySelector('.main-locations').offsetTop;
    let isServiceVisible = top > document.querySelector('.main-payment-wrapper').offsetTop;


    if (isPhoneVisible) {
        document.querySelector('.main-steps-details-left').classList.add('isVisible');
    }
    else{
        document.querySelector('.main-steps-details-left').classList.remove('isVisible');
    }

    if (isCitiesVisible) {
        document.querySelector('.main-locations').classList.add('isVisible');
    }
    else{
        document.querySelector('.main-locations').classList.remove('isVisible');
    }

    if (isServiceVisible) {
        [...document.querySelectorAll('.main-payment-service')]
        .map((e)=>{
            e.classList.add('isVisible');
        })
    }
    else{
        [...document.querySelectorAll('.main-payment-service')]
        .map((e)=>{
            e.classList.remove('isVisible');
        })
    }
});