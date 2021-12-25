const container = document.getElementById('container');
const text = document.getElementById('text');
const time = document.getElementById('time');

const totalTime = 9000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathRelaxAnimation();

function breathRelaxAnimation() {
    text.innerText = 'Breathe In!';
    time.innerText = (breatheTime / 1000) + ' ' + 'seconds';

    setTimeout(() => {
        text.innerText = 'Hold On!';
        time.innerText = (holdTime / 1000) + ' ' + 'seconds';
        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            time.innerText = (breatheTime / 1000) + ' ' + 'seconds';
        }, holdTime);
    }, breatheTime);
}

setInterval(breathRelaxAnimation, totalTime);