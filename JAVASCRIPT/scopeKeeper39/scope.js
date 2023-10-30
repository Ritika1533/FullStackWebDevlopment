const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const selectWinningScore = document.querySelector('#playto');
let p1Score = 0;
let p2Score = 0;
let winningScore = 2;
let isGameOver = false;
p1Button.addEventListener('click', function (e) {
    if (!isGameOver) {
        p1Score = p1Score + 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('looser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.innerText = p1Score;
    }
})
p2Button.addEventListener('click', function (e) {
    if (!isGameOver) {
        p2Score = p2Score + 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('looser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.innerText = p2Score;
    }
})
selectWinningScore.addEventListener('change', function (e) {
    winningScore = parseInt(this.value);
    reset();
})
resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = p1Score;
    p2Display.innerText = p2Score;
    p1Display.classList.remove('winner', 'looser');
    p2Display.classList.remove('looser', 'winner');
    p1Button.disabled = false;
    p2Button.disabled = false;
}