// Write your solution here!
const cats = [
    "Milo", "Otis", "Garfield"
];

function destructivelyAppendCat() {
cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function  destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}
cats;


const name =  "Broom"
 function appendCat(name) {
    const allCats = [...cats, name]
    return allCats;
}

const name2 = "Arnold"
function prependCat(name2) {
const allCats2 = [name2, ...cats];
return allCats2;
}

function removeLastCat() {
    const allCats3 = cats.slice(0, -1);
    return allCats3; 
}

function removeFirstCat() {
    const allCats4 = cats.slice(1);
    return allCats4;
}
   
