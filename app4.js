
let boxes = document.querySelectorAll('.row > div');
let presentSubject = 'X';


boxes.forEach(function (box) {
    box.addEventListener("click", boxClicked);
});



console.log(boxes);
console.log(boxes[0].textContent, boxes[1].textContent, boxes[2].textContent);



function boxClicked(e) {
    if (e.target.textContent === 'O' || e.target.textContent === 'X') {
        return
    } else {
        e.target.textContent = presentSubject;
        switchSubject();
        winnerStatement();
    }
        drawStatement();
        console.log(e.target)
    if (((document.querySelector("h2").textContent == "X wins 🎉")) || ((document.querySelector("h2").textContent == "O wins 🎈")) || ((document.querySelector("h2").textContent == "Draw 🔥"))) {
        boxes.forEach(function (page) {   
            page.addEventListener("click", pageClicked)
    })} else {
        return
    }};



function switchSubject() {
    if (presentSubject === 'X') {  //=== is for truthiness, = just an assignment operator
        presentSubject = 'O';
    } else {
        presentSubject = 'X';
    }
}



function winnerStatement() {
    if ((boxes[0].textContent == 'X' && boxes[1].textContent == 'X' && boxes[2].textContent == 'X')) {
        document.querySelector("h2").textContent = "X wins 🎉";
    } else if ((boxes[3].textContent == 'X' && boxes[4].textContent == 'X' && boxes[5].textContent == 'X')) {
        document.querySelector("h2").textContent = "X wins 🎉";
    } else if ((boxes[6].textContent == 'X' && boxes[7].textContent == 'X' && boxes[8].textContent == 'X')) {
        document.querySelector("h2").textContent = "X wins 🎉";
    } else if ((boxes[0].textContent == 'X' && boxes[3].textContent == 'X' && boxes[6].textContent == 'X')) {
        document.querySelector("h2").textContent = "X wins 🎉";
    } else if ((boxes[1].textContent == 'X' && boxes[4].textContent == 'X' && boxes[7].textContent == 'X')) {
        document.querySelector("h2").textContent = "X wins 🎉";
    } else if ((boxes[2].textContent == 'X' && boxes[5].textContent == 'X' && boxes[8].textContent == 'X')) {
        document.querySelector("h2").textContent = "X wins 🎉";
    } else if ((boxes[0].textContent == 'X' && boxes[4].textContent == 'X' && boxes[8].textContent == 'X')) {
        document.querySelector("h2").textContent = "X wins 🎉";
    } else if ((boxes[2].textContent == 'X' && boxes[4].textContent == 'X' && boxes[6].textContent == 'X')) {
        document.querySelector("h2").textContent = "X wins 🎉";
    } else if ((boxes[0].textContent == 'O' && boxes[1].textContent == 'O' && boxes[2].textContent == 'O')) {
        document.querySelector("h2").textContent = "O wins 🎈";
    } else if ((boxes[3].textContent == 'O' && boxes[4].textContent == 'O' && boxes[5].textContent == 'O')) {
        document.querySelector("h2").textContent = "O wins 🎈";
    } else if ((boxes[6].textContent == 'O' && boxes[7].textContent == 'O' && boxes[8].textContent == 'O')) {
        document.querySelector("h2").textContent = "O wins 🎈";
    } else if ((boxes[0].textContent == 'O' && boxes[3].textContent == 'O' && boxes[6].textContent == 'O')) {
        document.querySelector("h2").textContent = "O wins 🎈";
    } else if ((boxes[1].textContent == 'O' && boxes[4].textContent == 'O' && boxes[7].textContent == 'O')) {
        document.querySelector("h2").textContent = "O wins 🎈";
    } else if ((boxes[2].textContent == 'O' && boxes[5].textContent == 'O' && boxes[8].textContent == 'O')) {
        document.querySelector("h2").textContent = "O wins 🎈";
    } else if ((boxes[0].textContent == 'O' && boxes[4].textContent == 'O' && boxes[8].textContent == 'O')) {
        document.querySelector("h2").textContent = "O wins 🎈";
    } else if ((boxes[2].textContent == 'O' && boxes[4].textContent == 'O' && boxes[6].textContent == 'O')) {
        document.querySelector("h2").textContent = "O wins 🎈";
    } else {
        return
    }
};


function drawStatement() {
    if (((boxes[0].textContent == 'X') || (boxes[0].textContent == 'O')) && ((boxes[1].textContent == 'X') || (boxes[1].textContent == 'O')) && ((boxes[2].textContent == 'X') || (boxes[2].textContent == 'O')) && ((boxes[3].textContent == 'X') || (boxes[3].textContent == 'O')) && ((boxes[4].textContent == 'X') || (boxes[4].textContent == 'O')) && ((boxes[5].textContent == 'X') || (boxes[5].textContent == 'O')) && ((boxes[6].textContent == 'X') || (boxes[6].textContent == 'O')) && ((boxes[7].textContent == 'X') || (boxes[7].textContent == 'O')) && ((boxes[8].textContent == 'X') || (boxes[8].textContent == 'O')) && !(((boxes[0].textContent == 'X' && boxes[1].textContent == 'X' && boxes[2].textContent == 'X') || (boxes[0].textContent == 'O' && boxes[1].textContent == 'O' && boxes[2].textContent == 'O'))
        || ((boxes[3].textContent == 'X' && boxes[4].textContent == 'X' && boxes[5].textContent == 'X') || (boxes[3].textContent == 'O' && boxes[4].textContent == 'O' && boxes[5].textContent == 'O'))
        || ((boxes[6].textContent == 'X' && boxes[7].textContent == 'X' && boxes[8].textContent == 'X') || (boxes[6].textContent == 'O' && boxes[7].textContent == 'O' && boxes[8].textContent == 'O'))
        || ((boxes[0].textContent == 'X' && boxes[3].textContent == 'X' && boxes[6].textContent == 'X') || (boxes[0].textContent == 'O' && boxes[3].textContent == 'O' && boxes[6].textContent == 'O'))
        || ((boxes[1].textContent == 'X' && boxes[4].textContent == 'X' && boxes[7].textContent == 'X') || (boxes[1].textContent == 'O' && boxes[4].textContent == 'O' && boxes[7].textContent == 'O'))
        || ((boxes[2].textContent == 'X' && boxes[5].textContent == 'X' && boxes[8].textContent == 'X') || (boxes[4].textContent == 'O' && boxes[5].textContent == 'O' && boxes[8].textContent == 'O'))
        || ((boxes[0].textContent == 'X' && boxes[4].textContent == 'X' && boxes[8].textContent == 'X') || (boxes[0].textContent == 'O' && boxes[4].textContent == 'O' && boxes[8].textContent == 'O'))
        || ((boxes[2].textContent == 'X' && boxes[4].textContent == 'X' && boxes[6].textContent == 'X') || (boxes[2].textContent == 'O' && boxes[4].textContent == 'O' && boxes[6].textContent == 'O')))) {
        document.querySelector("h2").textContent = "Draw 🔥";
    } else {
        return
    }
}

function pageClicked() {
    location.reload();
}



// click away to start over --- make another forEach 'click' event after boxes, but for board or other element -- also make board id container cover whole page









