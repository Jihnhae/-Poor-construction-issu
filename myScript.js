function openLink(url) {
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#link1').addEventListener('click', () => {
        openLink('https://www.khan.co.kr/national/labor/article/202311190900021');
    });
    document.querySelector('#link2').addEventListener('click', () => {
        openLink('https://www.ytn.co.kr/_ln/0103_202308021319022200');
    });
    document.querySelector('#link3').addEventListener('click', () => {
        openLink('https://www.sisajournal-e.com/news/articleView.html?idxno=231578');
    });
});

let nowIndex = 1;

document.addEventListener('DOMContentLoaded', () => {
    const imageSlider = document.querySelector('#imageSlider');
    const ivoryContainers = document.querySelectorAll('.ivory-container');

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

    const buttons = [
        bottomBtn01,
        bottomBtn02,
        bottomBtn03,
        bottomBtn04,
        bottomBtn05,
        bottomBtn06,
        bottomBtn07,
        bottomBtn08,
        bottomBtn09,
        bottomBtn10,
    ];

    buttons.forEach((button, idx) => {
        button.addEventListener('click', () => moveToIndex(idx + 1));
    });

    leftArrow.addEventListener('click', moveLeft);
    rightArrow.addEventListener('click', moveRight);

    function moveToIndex(index) {
        const offset = (index - 1) * 1160;
        imageSlider.style.transform = `translateX(-${offset}px)`;
        nowIndex = index;
        updateIvoryContainers();
        updateActiveButton();
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

    function updateIvoryContainers() {
        ivoryContainers.forEach((container, idx) => {
            if (nowIndex > 5 && idx < nowIndex - 5) {
                container.style.opacity = '1';
            } else {
                container.style.opacity = '0';
            }
        });
    }

    function updateActiveButton() {
        buttons.forEach((button, idx) => {
            if (idx === nowIndex - 1) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    moveToIndex(nowIndex); // Initialize the slider position and ivory containers visibility
});
