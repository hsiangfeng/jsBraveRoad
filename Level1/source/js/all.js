const numbermult1 = document.querySelectorAll('.number-mult-1');
const numbermult2 = document.querySelectorAll('.number-mult-2');


function multiTableTwo() {
    let mathMult = 10;
    for (let i = 2; i < mathMult; i++) {
        let str = '';
        let newStr = '';
        for (let j = 1; j < 4; j++) {
            str += `<div class="py-1 pl-md-3">${i} X ${j} = ${i * j}</div>`;
        }
        numbermult1[i - 2].innerHTML = str;

        for (let j = 4; j < 10; j++) {
            newStr += `<div class="py-1">${i} X ${j} = ${i * j}</div>`;
        }
        numbermult2[i - 2].innerHTML = newStr;
    }
}
window.onload = function () {
    multiTableTwo();
}