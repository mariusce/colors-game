function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var red = getRandomInt(256);
var green = getRandomInt(256);
var blue = getRandomInt(256);
var rgb = document.querySelector('.rgb');
rgb.textContent = `RGB(${red}, ${green}, ${blue})`;
var header = document.getElementById("header");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var mode = 'hard';
var countTo = 6;
easy.addEventListener('click', function() {
    hard.classList.remove('active');
    hard.classList.add('inactive');
    this.classList.remove('inactive');
    this.classList.add('active');
    mode = 'easy';
    countTo = 3;
    startNew();
});

hard.addEventListener('click', function() {
    easy.classList.remove('active');
    easy.classList.add('inactive');
    this.classList.remove('inactive');
    this.classList.add('active');
    mode = 'hard';
    countTo = 6;
    startNew();
});

var tryAgain = document.getElementById('try-again-span');
var playAgain = document.getElementById('play-again');

var rightColor = {
    red: red,
    green: green,
    blue: blue
};
var squares = {
    0: document.getElementById("square0"),
    1: document.getElementById("square1"),
    2: document.getElementById("square2"),
    3: document.getElementById("square3"),
    4: document.getElementById("square4"),
    5: document.getElementById("square5")
}
function startNew() {
    header.style.background = '#3c77a7';
    tryAgain.textContent = '';
    playAgain.textContent = 'NEW COLORS'
    colorSquares();
    addSquareListeners();
    if (mode === 'easy') {
        squares[3].style.background = '#232323';
        squares[4].style.background = '#232323';
        squares[5].style.background = '#232323';
    }
}
startNew();


var newColors = document.getElementById('new-colors');
newColors.addEventListener('click', function() {
    startNew();
    // this.removeEventListener('click');
});



function colorSquares() {
    red = getRandomInt(256);
    green = getRandomInt(256);
    blue = getRandomInt(256);
    rgb.textContent = `RGB(${red}, ${green}, ${blue})`;
    var guess = getRandomInt(countTo);
    rightColor = {
        idx: guess,
        red: red,
        green: green,
        blue: blue
    };
    for (var i = 0; i < countTo; i++) {
        if (i === rightColor.idx) {
            squares[i].style.background = `rgb(${red}, ${green}, ${blue})`;
        } else {
            var red1 = getRandomInt(256);
            var green1 = getRandomInt(256);
            var blue1 = getRandomInt(256);
            squares[i].style.background = `rgb(${red1}, ${green1}, ${blue1})`;
        }
    }
}

// function executeFunc()

function addSquareListeners() {
    for (var i = 0; i < countTo; i++) {
        squares[i].addEventListener('click', function() {
            if (this.style.background.includes(rgb.textContent.toLowerCase())) {
                for (var j = 0; j < countTo; j++) {
                    squares[j].style.background = `rgb(${rightColor.red}, ${rightColor.green}, ${rightColor.blue})`;
                    header.style.background = `rgb(${rightColor.red}, ${rightColor.green}, ${rightColor.blue})`;
                }
                tryAgain.textContent = 'Correct!';
                playAgain.textContent = 'PLAY AGAIN?'
            } else {
                this.style.background = '#232323';
                tryAgain.textContent = 'Try Again';
            }
            // this.removeEventListener('click');
        });
    }
}

