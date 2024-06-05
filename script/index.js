let rInput = document.querySelectorAll('input')[0];
let gInput = document.querySelectorAll('input')[1];
let bInput = document.querySelectorAll('input')[2];
let convertBtn = document.querySelector('button');
let ans = document.querySelector('span');

convertBtn.addEventListener('click', () => {
    const r = parseInt(rInput.value, 10);
    const g = parseInt(gInput.value, 10);
    const b = parseInt(bInput.value, 10);
    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
        const hex = rgbToHex(r, g, b);
        ans.innerText = `Hex: #${hex}`;
    } else {
        ans.innerText = 'Invalid RGB values';
    }
});

function rgbToHex(r, g, b) {
    const hexR = r.toString(16).padStart(2, '0'); //pads the string 
    const hexG = g.toString(16).padStart(2, '0'); //pads the string 
    const hexB = b.toString(16).padStart(2, '0'); //pads the string 
    return `${hexR}${hexG}${hexB}`;
}