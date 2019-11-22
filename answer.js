// *** YOUR ANSWER BELOW ***
function negate(werd){
    return "un" + werd;
}

function intensify(werd){
    return "plus" + werd;
}

function reinforce(werd){
    return "double" + werd;
}
console.log(negate("cold"));
console.log(intensify("cold"));
console.log(reinforce(intensify("cold")));
console.log(reinforce(intensify(negate("cold"))));