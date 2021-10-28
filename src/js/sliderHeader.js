let slides = document.querySelectorAll('.slide-single');
let titles = [];
let text = [];

slides.forEach(e => {
    titles.push(e.children[0].innerHTML);
    text.push(e.children[1].innerHTML);
    e.remove();
})

let step = 0;
let offset = 0;

function draw () {
    // Создаём контейнер
    let div = document.createElement('div');
    div.classList.add('slider__item');
    div.classList.add('slide-single');

    // Создаём заголовок внутри контейнера
    let title = document.createElement('h1');
    title.classList.add('slider__title');
    title.innerHTML = titles[step];
    
    // Создаём параграф внутри контейнера
    let textHTML = document.createElement('p');
    textHTML.classList.add('slider__text');
    textHTML.innerHTML = text[step];

    // Создаём контейнер для кнопок
    let sliderBtn = document.createElement('div');
    sliderBtn.classList.add('slider__btn');

        // Создаём блок со стрелкой
        let nextSection = document.createElement('a');
        nextSection.classList.add('next-section');
        nextSection.href = "#collection";
            // Создаём стрелку
            let arrowDown = document.createElement('span');
            arrowDown.classList.add('fa');
            arrowDown.classList.add('fa-arrow-down');
            nextSection.appendChild(arrowDown);
    
        // Создаём блок с ссылкой на магазин
        let btnHTML = document.createElement('a');
        btnHTML.classList.add('btn');
        btnHTML.href = 'shop.html';
        btnHTML.innerHTML = "Открыть магазин";

    // Добавляем две ссылки в их контейнер
    sliderBtn.appendChild(nextSection);
    sliderBtn.appendChild(btnHTML);
    
    // let img = document.createElement('img');
    // img.src = "src/images/woman-right.png";
    // div.appendChild(img);
    
    // Добавляем все блоки в главный блок
    div.appendChild(title);
    div.appendChild(textHTML);
    div.appendChild(sliderBtn);


    // Делаем сдвиг блока
    div.style.left = offset*650 + 'px';
    // Добавляем слайдер в общий блок слайдеров
    document.querySelector('#slide').appendChild(div);
    
    if(step + 1 >= text.length) {
        step = 0;
    } else {
        step++;
    }
    offset = 1;
}

draw();
draw();



let sliderPoint = document.querySelectorAll('.slider__point > span');

sliderPoint.forEach(el => {
    el.addEventListener('click', e => {
        sliderPoint[0].classList.remove('active');
        sliderPoint[1].classList.remove('active');
        sliderPoint[2].classList.remove('active');
        e.target.classList.add('active')
    })
});


function left () {
    let slides2 = document.querySelectorAll('.slide-single');
    let offset2 = 0;
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset2*650 - 650 + 'px';
        offset2++;
    }
    setTimeout(function(){
        slides2[0].remove();
        draw();
    }, 500);
}

sliderPointEl.onclick = left;