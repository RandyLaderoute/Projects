
function Coercion_function(){                //Defining a function and giving it a name Coercion_function().

    var coercion_Operator = "10" + 5;          

    document.getElementById("Coercion").innerHTML = coercion_Operator; //Putting the value of Champion.name in the HTML element with "Dictionary"
}

function NaN7_function(){                //Defining a function and giving it a name Coercion_function().

    var nan_007 = isNaN(007);          

    document.getElementById("nan7").innerHTML = nan_007; //Putting the value of Champion.name in the HTML element with "Dictionary"
}

function Str_NaN_function(){                //Defining a function and giving it a name Coercion_function().

    var nan_string = isNaN("string");          

    document.getElementById("Str_nan").innerHTML = nan_string; //Putting the value of Champion.name in the HTML element with "Dictionary"
}

function infinity_function(){                //Defining a function and giving it a name Coercion_function().

    var big_number = 32E1000;          

    document.getElementById("infi").innerHTML = big_number; //Putting the value of Champion.name in the HTML element with "Dictionary"
}

function neg_infinity_function(){                //Defining a function and giving it a name Coercion_function().

    var big_neg_number = -32E400;          

    document.getElementById("neg_infi").innerHTML = big_neg_number; //Putting the value of Champion.name in the HTML element with "Dictionary"
}



function greater_true_function(){                //Defining a function and giving it a name Coercion_function().

    var greater_than = 10 > 2;          

    document.getElementById("greater").innerHTML = greater_than; //Putting the value of Champion.name in the HTML element with "Dictionary"
}

function greater_false_function(){                //Defining a function and giving it a name Coercion_function().

    var less_than = 10 < 2;          

    document.getElementById("lesser").innerHTML = less_than; //Putting the value of Champion.name in the HTML element with "Dictionary"
}

console.log(2+2); //console test
console.log(10 < 2); //display false in console
console.log(10 == 10) //display true in console using "=="
console.log(10 == 15) //display false in console using "=="

console.log(1===1);
console.log(1===2);
console.log(1==="1");
console.log(1==="2");
console.log(1 != 2);
console.log(1 != 1);

console.log(1<2 && 1==1);
console.log(1>2 && 1==1);
console.log(1<2 || 1==1);
console.log(1>2 || 1==2);