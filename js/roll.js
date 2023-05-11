// const   d2 = 2, d4 = 4, d6 = 6, d8 = 8, d10 = 10, d12 = 12, d20 = 20, d100 = 100;

let sideBarIsOpen = false;
let result = [];
let numDice = [0, 0, 0, 0, 0, 0, 0, 0];
let history = [];

// ----------------------- DICE --------------------------------

let d2 = {
    sides: 2,
    roll: function() {
        let randomNumber = Math.floor(Math.random() * this.sides) +1;
        return randomNumber;
    }
}
let d4 = {
    sides: 4,
    roll: function() {
        let randomNumber = Math.floor(Math.random() * this.sides) +1;
        return randomNumber;
    }
}
let d6 = {
    sides: 6,
    roll: function() {
        let randomNumber = Math.floor(Math.random() * this.sides) +1;
        return randomNumber;
    }
}
let d8 = {
    sides: 8,
    roll: function() {
        let randomNumber = Math.floor(Math.random() * this.sides) +1;
        return randomNumber;
    }
}
let d10 = {
    sides: 10,
    roll: function() {
        let randomNumber = Math.floor(Math.random() * this.sides) +1;
        return randomNumber;
    }
}
let d12 = {
    sides: 12,
    roll: function() {
        let randomNumber = Math.floor(Math.random() * this.sides) +1;
        return randomNumber;
    }
}
let d20 = {
    sides: 20,
    roll: function() {
        let randomNumber = Math.floor(Math.random() * this.sides) +1;
        return randomNumber;
    }
}
let d100 = {
    sides: 100,
    roll: function() {
        let randomNumber = Math.floor(Math.random() * this.sides) +1;
        return randomNumber;
    }
}

// ----------------------- SIDE BAR -----------------------------

function triggerSideBar() {
    if(sideBarIsOpen) {
        closeSideBar();
    } else {
        openSideBar();
    }
}

function openSideBar() {
    document.getElementById("side-bar").style.width = "250px";
    // document.getElementById("close-side-bar").style.
    sideBarIsOpen = true;
}

function closeSideBar() {
    document.getElementById("side-bar").style.width = 0;
    sideBarIsOpen = false;
}

// ------------------------- DICE BOX QUANTITY HANDLERS -------------------

function addDie(num) {
    switch(num) {
        case 2:
            numDice[0]++;
            document.getElementById("display-qd2").textContent = numDice[0];
            break;
        case 4:
            numDice[1]++;
            document.getElementById("display-qd4").textContent = numDice[1];
            break;
        case 6:
            numDice[2]++;
            document.getElementById("display-qd6").textContent = numDice[2];
            break;
        case 8:
            numDice[3]++;
            document.getElementById("display-qd8").textContent = numDice[3];
            break;
        case 10:
            numDice[4]++;
            document.getElementById("display-qd10").textContent = numDice[4];
            break;
        case 12:
            numDice[5]++;
            document.getElementById("display-qd12").textContent = numDice[5];
            break;
        case 20:
            numDice[6]++;
            document.getElementById("display-qd20").textContent = numDice[6];
            break;
        case 100:
            numDice[7]++;
            document.getElementById("display-qd100").textContent = numDice[7];
            break;
        default:
            console.log("invalid die type of "); console.log(num);
            break;
    }
}

function minusDie(num) {
    switch(num) {
        case 2:
            if(numDice[0] <= 0) {
                break;
            }
            numDice[0]--;
            document.getElementById("display-qd2").textContent = numDice[0];
            break;
        case 4:
            if(numDice[1] <= 0) {
                break;
            }
            numDice[1]--;
            document.getElementById("display-qd4").textContent = numDice[1];
            break;
        case 6:
            if(numDice[2] <= 0) {
                break;
            }
            numDice[2]--;
            document.getElementById("display-qd6").textContent = numDice[2];
            break;
        case 8:
            if(numDice[3] <= 0) {
                break;
            }
            numDice[3]--;
            document.getElementById("display-qd8").textContent = numDice[3];
            break;
        case 10:
            if(numDice[4] <= 0) {
                break;
            }
            numDice[4]--;
            document.getElementById("display-qd10").textContent = numDice[4];
            break;
        case 12:
            if(numDice[5] <= 0) {
                break;
            }
            numDice[5]--;
            document.getElementById("display-qd12").textContent = numDice[5];
            break;
        case 20:
            if(numDice[6] <= 0) {
                break;
            }
            numDice[6]--;
            document.getElementById("display-qd20").textContent = numDice[6];
            break;
        case 100:
            if(numDice[7] <= 0) {
                break;
            }
            numDice[7]--;
            document.getElementById("display-qd100").textContent = numDice[7];
            break;
        default:
            console.log("invalid die type of "); console.log(num);
            break;
    }
}

// --------------------------------- MAIN FUNCTIONS ------------------------

function rollTray() {
    let arrPos = 0;
    let diceType = "null";
    let roll = 0;

    if(numDice[0] >= 0) {
        diceType = "D2";
        for (let i = numDice[0]; i > 0; i--) {
            roll = d2.roll();
            result[arrPos,0] = diceType;
            result[arrPos,1] = roll;
            arrPos++;
        }

    }
    printResult();
}

function printResults() {
    
    for (let i = 0; i < result.length; i++){
        for(let j = 0; j < result.width; j++) {


        }
    }
    //add grid to results div, print by append child to results div
}


// ------------------------ DICE BUTTONS -------------------------

document.getElementById("d2+").addEventListener('click', function(){addDie(2)});
document.getElementById("d2-").addEventListener('click', function(){minusDie(2)});

document.getElementById("d4+").addEventListener('click', function(){addDie(4)});
document.getElementById("d4-").addEventListener('click', function(){minusDie(4)});

document.getElementById("d6+").addEventListener('click', function(){addDie(6)});
document.getElementById("d6-").addEventListener('click', function(){minusDie(6)});

document.getElementById("d8+").addEventListener('click', function(){addDie(8)});
document.getElementById("d8-").addEventListener('click', function(){minusDie(8)});

document.getElementById("d10+").addEventListener('click', function(){addDie(10)});
document.getElementById("d10-").addEventListener('click', function(){minusDie(10)});

document.getElementById("d12+").addEventListener('click', function(){addDie(12)});
document.getElementById("d12-").addEventListener('click', function(){minusDie(12)});

document.getElementById("d20+").addEventListener('click', function(){addDie(20)});
document.getElementById("d20-").addEventListener('click', function(){minusDie(20)});

document.getElementById("d100+").addEventListener('click', function(){addDie(100)});
document.getElementById("d100-").addEventListener('click', function(){minusDie(100)});

document.getElementById("roll-btn").addEventListener('click', function(){rollTray()});
