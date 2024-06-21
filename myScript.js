let nowIndex = 1;

const imageSlider = document.querySelector('#imageSlider');

const bottomBtn01 = document.querySelector('#imgTo1');
const bottomBtn02 = document.querySelector('#imgTo2');
const bottomBtn03 = document.querySelector('#imgTo3');
const bottomBtn04 = document.querySelector('#imgTo4');
const bottomBtn05 = document.querySelector('#imgTo5');
const bottomBtn06 = document.querySelector('#imgTo6');
const bottomBtn07 = document.querySelector('#imgTo7');
const bottomBtn08 = document.querySelector('#imgTo8');
const bottomBtn09 = document.querySelector('#imgTo9');
const bottomBtn10 = document.querySelector('#imgTo10');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

bottomBtn01.addEventListener('click', () => moveToIndex(1));
bottomBtn02.addEventListener('click', () => moveToIndex(2));
bottomBtn03.addEventListener('click', () => moveToIndex(3));
bottomBtn04.addEventListener('click', () => moveToIndex(4));
bottomBtn05.addEventListener('click', () => moveToIndex(5));
bottomBtn06.addEventListener('click', () => moveToIndex(6));
bottomBtn07.addEventListener('click', () => moveToIndex(7));
bottomBtn08.addEventListener('click', () => moveToIndex(8));
bottomBtn09.addEventListener('click', () => moveToIndex(9));
bottomBtn10.addEventListener('click', () => moveToIndex(10));

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

function moveToIndex(index) {
    const offset = (index - 1) * 1160;
    imageSlider.style.transform = `translateX(-${offset}px)`;
    nowIndex = index;
}

function moveLeft() {
    if (nowIndex > 1) {
        nowIndex--;
    }
    moveToIndex(nowIndex);
}

function moveRight() {
    if (nowIndex < 10) {
        nowIndex++;
    }
    moveToIndex(nowIndex);
}
