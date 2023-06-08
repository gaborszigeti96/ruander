var tupleminta; //név életkor pl
tupleminta = ["Kis józsef", 21];
var tupleminta2 = ["Nagy Katalin", 18];
console.log(tupleminta[0]);
console.log(tupleminta[1]);
console.log(tupleminta2[0]);
console.log(tupleminta2[1]);
function NegyzetKeruletTerulet(aOldal) {
    var kerulet = aOldal * 4;
    var terulet = aOldal * aOldal;
    return [kerulet, terulet];
}
var eredmeny = NegyzetKeruletTerulet(3);
console.log(eredmeny[0] + "és" + eredmeny[1]);
function TombFeltolto(meret, alsoHatar, felsoHatar) {
    var generaltTomb = [];
    for (var i = 0; i < meret; i++) {
        generaltTomb.push(Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar);
    }
    return generaltTomb;
}
var vizsgaltTomb = TombFeltolto(6, 1, 20);
console.log(vizsgaltTomb);
function MaximumKereses(vizsgaltTomb) {
    var maxErtek = vizsgaltTomb[0];
    var maxIndex = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] > maxErtek) {
            maxErtek = vizsgaltTomb[i];
            maxIndex = i;
        }
    }
    return [maxErtek, maxIndex];
}
var maxEredmeny = MaximumKereses(vizsgaltTomb);
console.log(maxEredmeny);
function Masodfoku(a, b, c) {
    var x1 = 0;
    var x2 = 0;
    if (a == 0) {
        console.log("Az A érték nem lehet nulla");
    }
    else {
        var d = b * b - 4 * a * c;
        if (d >= 0) {
            x1 = (-b + Math.sqrt(d)) / 2 / a;
            x2 = (-b - Math.sqrt(d)) / 2 / a;
        }
        else {
            console.log("Nem valós szám");
        }
    }
    return [x1, x2];
}
console.log(Masodfoku(5, 9, 2));
console.log(Masodfoku(1, 1, 1));
console.log(Masodfoku(7, 10, 3));
console.log(Masodfoku(0, 10, 3));
function Fibonacci(range) {
    var sequence = [0, 1];
    for (var i = 1; i < range; i++) {
        sequence.push(sequence[i] + sequence[i - 1]);
    }
    return sequence;
}
console.log(Fibonacci(10));
function Palidrome(text) {
    var same = false;
    var textbackward = "";
    for (var i = text.length - 1; i >= 0; i--) {
        textbackward += text[i];
    }
    if (textbackward == text) {
        same = true;
    }
    console.log(textbackward);
    return same;
}
console.log(Palidrome("alma"));
console.log(Palidrome("aza aza aza"));
console.log(Palidrome("aza"));
function SumArr(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
var sumnumbers = [5, 10, 5, 10, 5];
console.log(SumArr(sumnumbers));
function Titlecase(text) {
    return text.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(Titlecase("Elment a lidinéni a vásárba csuhajja"));
function Sorting(numbers) {
    return numbers.sort(function (a, b) { return a - b; });
}
console.log(Sorting(sumnumbers));
function factorial(x) {
    if (x == 0 || x == 1) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}
console.log(factorial(5));
