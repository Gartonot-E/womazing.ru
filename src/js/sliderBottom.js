let slidesTeam = document.querySelectorAll('.single-slide');
let imgTeamSrc = [];

slidesTeam.forEach( el => {
    imgTeamSrc.push(el.src);
    el.remove();
});


let stepTeam = 0;
let offsetTeam = 0;


function drawTeam() {
    let img = document.createElement('img');
    img.classList.add('single-slide');
    img.src = imgTeamSrc[stepTeam];
    
    img.style.left = offsetTeam*729 + 'px';

    document.querySelector('#sliderTeam').appendChild(img);

    if(stepTeam + 1 >= imgTeamSrc.length) {
        stepTeam = 0;
    } else {
        stepTeam++;
    }
    offsetTeam = 1;
}

drawTeam();
drawTeam();
offsetTeam = -1;
drawTeam();

function left () {
    let slides2 = document.querySelectorAll('.single-slide');
    let offsetTeam = 0;
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offsetTeam*729 - 729 + 'px';
        offsetTeam++;
    }
    setTimeout(function(){
        slides2[0].remove();
        drawTeam();
    }, 500);
}

function right () {
    let slides2 = document.querySelectorAll('.single-slide');
    let offsetTeam = -1;
    
    slides2[2].style.left = offsetTeam*729 + 729 + 'px';
    offsetTeam--;
    slides2[1].style.left = offsetTeam*729 + 729 + 'px';
    offsetTeam--;

    setTimeout(function(){
        slides2[0].remove();
        drawTeam();
    }, 500);
}

teamLeft.onclick = left;
teamRight.onclick = right;