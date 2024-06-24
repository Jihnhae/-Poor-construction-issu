let nowIndex = 1;
let visibleIvoryBoxes = new Set(); // 현재 보이는 아이보리 박스들을 추적하는 집합

document.addEventListener('DOMContentLoaded', () => {
    const imageSlider = document.querySelector('#imageSlider');
    const ivoryBox1 = document.getElementById('ivoryBox1');
    const ivoryBox2 = document.getElementById('ivoryBox2');
    const ivoryBox3 = document.getElementById('ivoryBox3');
    const ivoryBox4 = document.getElementById('ivoryBox4');

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
        updateIvoryBoxes();
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

    function updateIvoryBoxes() {
        if (nowIndex >= 2) {
            ivoryBox1.classList.add('visible');
            visibleIvoryBoxes.add(ivoryBox1);
        }
        if (nowIndex >= 6) {
            ivoryBox2.classList.add('visible');
            visibleIvoryBoxes.add(ivoryBox2);
        }
        if (nowIndex >= 8) {
            ivoryBox3.classList.add('visible');
            visibleIvoryBoxes.add(ivoryBox3);
        }
        if (nowIndex >= 10) {
            ivoryBox4.classList.add('visible');
            visibleIvoryBoxes.add(ivoryBox4);
        }

        visibleIvoryBoxes.forEach(box => {
            box.classList.add('visible');
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

    moveToIndex(nowIndex); // Initialize the slider position and ivory boxes visibility
});

