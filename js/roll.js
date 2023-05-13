// const   d2 = 2, d4 = 4, d6 = 6, d8 = 8, d10 = 10, d12 = 12, d20 = 20, d100 = 100;

let sideBarIsOpen = false;
let numDice = [0, 0, 0, 0, 0, 0, 0, 0];
let results = new Array();
let history = new Array();
let histIndex = 1;

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
    document.getElementById("side-bar-btn").style.right = "165px";
    document.getElementById("side-bar-btn-caret").className= "fa-solid fa-chevron-right fa-xl";
    sideBarIsOpen = true;
}
function closeSideBar() {
    document.getElementById("side-bar").style.width = 0;
    document.getElementById("side-bar-btn").style.right = "5px";
    document.getElementById("side-bar-btn-caret").className= "fa-solid fa-chevron-left fa-xl";
    sideBarIsOpen = false;
}

// ------------------------- DICE BOX QUANTITY HANDLERS -------------------

//addDie and minusDie functions run die button inputs through a switch which then
//updates the count of those dies and adjusts the page display
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

//this function takes any dice in the 'tray' and records individual dice rolls:
//runs through the numDice array, accounting for each type of die and quantity of each,
//stores each roll value inside an object 'temp' and once finished, 
//pushes 'temp' object to be stored within array 'results'
function rollTray() {
    let arrPos = 0;
    let diceType = "null";
    let roll = 0;

    //clears previous roll results from page DOM
    clearPageDivs();

    let temp = new Object();

    if(numDice[0] > 0) {
        diceType = "D2";
        for (let i = numDice[0]; i > 0; i--) {
            roll = d2.roll();
            temp = new Object();
            temp["diceRolled"] = diceType;
            temp["rollResult"] = roll;
            results.push(temp);
            arrPos++;
        };
    }; //end d2
    if(numDice[1] > 0) {
        diceType = "D4";
        for (let i = numDice[1]; i > 0; i--) {
            roll = d4.roll();
            temp = new Object();
            temp["diceRolled"] = diceType;
            temp["rollResult"] = roll;
            results.push(temp);
            arrPos++;
        };
    }; //end d4
    if(numDice[2] > 0) {
        diceType = "D6";
        for (let i = numDice[2]; i > 0; i--) {
            roll = d6.roll();
            temp = new Object();
            temp["diceRolled"] = diceType;
            temp["rollResult"] = roll;
            results.push(temp);
            arrPos++;
        };
    }; //end d6
    if(numDice[3] > 0) {
        diceType = "D8";
        for (let i = numDice[3]; i > 0; i--) {
            roll = d8.roll();
            temp = new Object();
            temp["diceRolled"] = diceType;
            temp["rollResult"] = roll;
            results.push(temp);
            arrPos++;
        };
    }; //end d8
    if(numDice[4] > 0) {
        diceType = "D10";
        for (let i = numDice[4]; i > 0; i--) {
            roll = d10.roll();
            temp = new Object();
            temp["diceRolled"] = diceType;
            temp["rollResult"] = roll;
            results.push(temp);
            arrPos++;
        };
    }; //end d10
    if(numDice[5] > 0) {
        diceType = "D12";
        for (let i = numDice[5]; i > 0; i--) {
            roll = d12.roll();
            temp = new Object();
            temp["diceRolled"] = diceType;
            temp["rollResult"] = roll;
            results.push(temp);
            arrPos++;
        };
    }; //end d12
    if(numDice[6] > 0) {
        diceType = "D20";
        for (let i = numDice[6]; i > 0; i--) {
            roll = d20.roll();
            temp = new Object();
            temp["diceRolled"] = diceType;
            temp["rollResult"] = roll;
            results.push(temp);
            arrPos++;
        };
    }; //end d20
    if(numDice[7] > 0) { // --------------------------------------------- NEEDS MOD TO ROUND NEAREST TENTH
        diceType = "D100";
        for (let i = numDice[7]; i > 0; i--) {
            roll = d100.roll();
            temp = new Object();
            temp["diceRolled"] = diceType;
            temp["rollResult"] = roll;
            results.push(temp);
            arrPos++;
        };
    }; //end d100
    printResults();
}

//clears any added dice from diceTray counters 
//by re-initializing numDice array to zeros and resets DOM displays
function clearTray() {
    numDice = [0, 0, 0, 0, 0, 0, 0, 0];
    document.getElementById("display-qd2").textContent = numDice[0];
    document.getElementById("display-qd4").textContent = numDice[1];
    document.getElementById("display-qd6").textContent = numDice[2];
    document.getElementById("display-qd8").textContent = numDice[3];
    document.getElementById("display-qd10").textContent = numDice[4];
    document.getElementById("display-qd12").textContent = numDice[5];
    document.getElementById("display-qd20").textContent = numDice[6];
    document.getElementById("display-qd100").textContent = numDice[7];
}

//creates DOM elements and appends them to the page to display dice roll results
function printResults() {
    for (let i = 0; i < results.length; i++) {
        //creates div, class="results-rows"
        let row = document.createElement("div");
        row.classList.add("results-rows");
        //creates span for dice title
        let rowtitle = document.createElement("span");
        rowtitle.textContent = results[i].diceRolled + ': ';
        //creates span for roll results
        let rowroll = document.createElement("span");
        rowroll.textContent = results[i].rollResult;
        //appends both spans within the created div
        row.appendChild(rowtitle);
        row.appendChild(rowroll);
        //appends the created div to "results-display" div
        document.getElementById("results-display").append(row);
    };
    // str = JSON.stringify(obj);
    // console.log(str);
    appendHistory();
}

//takes newest roll results array and adds to history array along with history index (the order of history results)
function appendHistory() {
    let tempHist = new Object;
    tempHist["historyIndex"] = histIndex;
    tempHist["rollHistory"] = results;
    history.push(tempHist);
    histIndex++;
    clearArray();
}

//resets results array back to new array
function clearArray() {
    results = [];
}

//clears the child divs for div element class "results-display"
function clearPageDivs() {
    let element = document.getElementById("results-display");
    while(element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    };
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
document.getElementById("clear-btn").addEventListener('click', function(){clearTray()});
