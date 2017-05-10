function calculateDogAge(age) {
    var dogYears = 7 * age;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(1);
calculateDogAge(0.5);
calculateDogAge(12);


//-----------------------------------------------------------------------------


function calculateSupply (age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' cups of coffee to keep you alive!';
    console.log (message);
}

calculateSupply (28, 36);
calculateSupply (28, 2.5);
calculateSupply (28, 400);


//-----------------------------------------------------------------------------


 var cube = function(x) {
    return x * x * x;
};

console.log(cube(5));
console.log(cube("test"));


var cube = function (x) {
    if (typeof(x) !== ' number') return true;
    return x * x * x; 
};

console.log(cube('test')); 

//-------------------------------------------------------------------------------

var square = function(x) {
    return x * x * x;
};
    square(2);
    square("test");

    var square = function (x) {
        if (typeof(x) === 'string') return true;
        return x * x * x;
};

console.log(square('string')); */


//--------------------------------------------------------------------------------

var w = 15;
var volume = function (w, l, h) {
    return w * 1 * h;
};

volume (2,3,4);
console.log(w); 

//---------------------------------------------------------------------

var area = 35;
var volume = function (w, l, h) {
var area = w * l;
    console.log ("Inside the function, area is " + area);
    return area * h;
};

console.log ("The volume is " + volume (5,3,4));
console.log ("Outside the function, area is " + area);

//---------------------------------------------------------------------

function getMaxnumb (n1, n2) {
    if (n1 < n2) {
        return n2;
    }
    else {
        return n1;
    }
}

console.log(getMaxnumb(10,11));

//-----------------------------------------------------------------------

var num1 = 5 ;
var num2 = 6 ;
var getMaxnum = function (n1, n2) {
    if (n1 < n2) {
        return n2;
    }
    else {
        return n1;
    }
};

console.log(getMaxnum (num1,num2));

//-------------------------------------------------------------------------

function doubleMax(x,y) {
    return 2 * getMaxnum(x,y);
};

function getMaxnum (n1, n2) {
    if (n1 < n2) {
        return n2;
    }
    else {
        return n1;
    }
};

console.log (doubleMax(13,10)); 

//--------------------------------------------------------------------------


function luckyNumber (a,b,c){

    var lucky = b * getMin(a, c);

    return lucky;
}

function getMin (n1,n2){
    if (n1 > n2) {
        return n2;
    }
    else {
        return n1;}
}

alert ('Your lucky number is : ' + luckyNumber(5,6.5,2));

