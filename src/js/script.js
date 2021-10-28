window.onload = function () {
    // Variables
    const headerWrapper = document.querySelector('.header__wrapper');
    const burger        = document.querySelector('.burger');
    const headerBody    = document.querySelector('.header__body');
    // Event for fixed BG header wrapper
    (pageYOffset > 45) ? headerWrapper.classList.add('scroll') : headerWrapper.classList.remove('scroll');
    document.addEventListener('scroll', () => {
        (pageYOffset > 45) ? headerWrapper.classList.add('scroll') : headerWrapper.classList.remove('scroll'); 
    });

    // Event for clicked on burger
    burger.addEventListener('click', el => {
        burger.classList.toggle('active');
        headerBody.classList.toggle('active');
    });
}


let btn = document.querySelector('.popup__form .btn');
let form = document.querySelector('.popup__content form');
let success = document.querySelector('.popup__content .success__popup');
let error = 0;

btn.addEventListener('click', e => {

    if (form.children[1].value == "") {
        form.children[1].classList.add('err')
    } else {
        form.children[1].classList.remove('err');
 
    }
    
    if (form.children[2].value == "") {
        form.children[2].classList.add('err')
    } else {
        form.children[2].classList.remove('err'); 

    }

    if (form.children[3].value == "") {
        form.children[3].classList.add('err')
    } else {
        form.children[3].classList.remove('err'); 

    }

    if (form.children[1].classList.contains('err') || form.children[2].classList.contains('err') || form.children[3].classList.contains('err')) {

    } else {

        data = {
            name: form.children[1]
        }

        $.ajax({
            url: '/sendmail.php',         
            method: 'POST',           
            dataType: 'JSON',         
            data: data,    
            success: function(data){   
                alert(data);     
            }
        });
    
        form.style.display = 'none';
        success.style.display = 'block';
    }



    
});