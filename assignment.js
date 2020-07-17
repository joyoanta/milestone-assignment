// ---------------------Prob 1 Solution -------------------------------

function feetToMile(feet) {

    const mile = feet/5280;    // Calculation

    return mile ; 
}

let distance = feetToMile(10000)    // Users Requirement 

console.log("My Distance home to school: ", distance);

// ---------------------------Prob 2 Solution -----------------------------

function woodCalculator(chair, table, bed){

    const chairWood = chair*1 ;    // Calculation in Qfeet 
    const tableWood = table*3 ;
    const bedWood = bed*5 ;

    var total = chairWood + tableWood + bedWood ; 
    return total ; 
}

var amount = woodCalculator(4, 1, 2);
console.log ( "For my dinning room ", amount , "Qfoot Wood neded");

// ---------------------------Prob 3 Solution -----------------------------

function brickCalculator(brick) {

    let building = brick;
    if (building <= 10) {
        return (building * 15 * 1000);
    } else if (building <= 20) {
        return ((10 * 15) + (building - 10) * 12) * 1000;
    } else return ((10 * 15) + (10 * 12) + (building - 20) * 10) * 1000;
}

let brickAmount = brickCalculator(15);

console.log('Total Bricks Need : ', brickAmount , " PCs");

// ---------------------------Prob 4 Solution -----------------------------


function tinyFriend(value) {

    let smallName = value[0].length;
    let smallestName;
    for (let i = 0; i < value.length; i++) {
        if (value[i].length < smallName) {
            smallName = value[i].length;
            smallestName = value[i];
        }
    }

    return smallestName;
}

let friendsName = ['Tamal', 'Chaity', 'Mou', 'Arin', 'Shakib'];

let myFriend = tinyFriend(friendsName);
console.log('My Tiny Friends name: ', myFriend);

// ---------------------------Extra -----------------------------
