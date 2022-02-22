function math_function(){                //Defining a function and giving it a name math_function().

    var mathOperatorA = 5%2;               //Creating an operator and name it mathOperatorA

    
    document.getElementById("Math").innerHTML = "5%2 = " + mathOperatorA; //Putting the value of MathOperatorA in the HTML element with "Math"
}

function subtraction_Function(){        //Defining a function and giving it the name subtraction_Function().

    var Subtraction = 10 - 5;           //Creating an operator and named it Subtraction

    document.getElementById("Math-sub").innerHTML = "10 - 5 = " + Subtraction;   //Putting the value of Subtraction in the HTML element with "Math-sub"
}

function addition_Function(){        //Defining a function and giving it the name addition_Function().

    var Addition = 10 + 5;           //Creating an operator and named it Addition

    document.getElementById("Math-add").innerHTML = "10 + 5 = " + Addition;   //Putting the value of Addition in the HTML element with "Math-add"
}

function multiplication_Function(){        //Defining a function and giving it the name multiplication_Function().

    var multiplication = 10 * 5;           //Creating an operator and named it multiplication

    document.getElementById("Math-multi").innerHTML = "10 * 5 = " + multiplication;   //Putting the value of multiplication in the HTML element with "Math-multi"
}

function random_Function(){        //Defining a function and giving it the name random_Function().

    var random = Math.round((Math.random() * 100));           //Creating an operator and named it random

    document.getElementById("Math-rando").innerHTML = random;   //Putting the value of random in the HTML element with "Math-rando"
}

function increase_Function(){       //Defining a function and giving it the name increase_Function().

    var baseX = 10;                 //Creating variable called basedX
    baseX++;                        //Give baseX an incremental operator

    document.getElementById("Math-increase").innerHTML = baseX;   //Putting the value of increase in the HTML element with "Math-increase"
}

function decrease_Function(){       //Defining a function and giving it the name decrease_Function().

    var baseX = 10;                 //Creating variable called basedX
    baseX--;                        //Give baseX an decremental operator

    document.getElementById("Math-decrease").innerHTML = baseX;   //Putting the value of decrease in the HTML element with "Math-decrease"
}