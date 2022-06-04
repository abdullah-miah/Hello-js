// problem-1
function anaToVori(ana) {
    const totalVoriCal = ana / 16;
    if (typeof ana != "number") {
    return "please enter valid number";
    }
    if (ana > 0) {
    return totalVoriCal;
    }
    else {
    const errormessage = "you can must input minimum 1 ana";
    return errormessage;
    }
    }
    // problem-2
    function pandaCost(singara, somoca, jilapi) {
    let costcalculation = singara * 7 + somoca * 10 + jilapi * 15;
    if (typeof singara != "number" || typeof somoca != "number" || typeof jilapi != "number") {
    return "please enter valid number";
    }
    if (singara >= 0 && somoca >= 0 && jilapi >= 0) {
    return costcalculation;
    } else {
    const errormessage = "You can must enter 1 sigara,somoca and jilapi";
    return errormessage;
    }
    }
    // problem-3
    function picnicBudget(person) {
    if (typeof person != "number") {
    return "Please add valid number"
    }
    const frist100 = 5000;
    const second100 = 4000;
    const third100 = 3000;
    if (person < 0) {
    const errormessage = "You must be selcet single person";
    return errormessage;
    }
    else if (person <= 100) {
    const count100 = frist100 * person;
    return count100;
    } else if (person <= 200) {
    const count100 = frist100 * 100;
    const restperson = person - 100;
    const count200 = restperson * second100;
    const total200 = count100 + count200;
    return total200;
    } else if (person > 200) {
    const count100 = frist100 * 100;
    const count200 = second100 * 100;
    const restperson = person - 200;
    const count200Up = third100 * restperson;
    const total200Up = count100 + count200 + count200Up;
    return total200Up;
    }
    }
    // problem-4
    function oddFriend(friendName) {
    for (let i = 0; i < friendName.length; i++) {
    let oddName = friendName[i];
    if (oddName.length % 2 == 1) {
    return oddName;
    }
    }
    if (typeof friendName != "string") {
    const errorMassage = "Please put the string!";
    return errorMassage;
    }
    }