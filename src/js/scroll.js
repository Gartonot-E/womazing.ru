/**
 * Function scroll to id
 */

 (() => {
    const links = document.querySelectorAll('a[href="#collection"]');
    
    links.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
            let id = el.getAttribute('href');
            if(id[1] !== undefined){
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
        });
    });
})();