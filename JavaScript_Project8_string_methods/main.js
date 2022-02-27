function concatenate(){
    var firstHalf = "The first half of ";
    var secondHalf = "this two part sentence";
    var completeSentence = firstHalf.concat(secondHalf);
    document.getElementById("conca_String").innerHTML = completeSentence;
}

function slice(){
    var whole = "0123456789";
    var sev_nine = whole.slice(7,10);
    document.getElementById("seven_to_nine").innerHTML = sev_nine;
}

function uppercase(){
    var statement = "To Upper";
    var yelled_statement = statement.toUpperCase();
    document.getElementById("yelled").innerHTML = yelled_statement;
}

function toString(){
    var number = 200;
    document.getElementById("ToString").innerHTML = number.toString();
}

function precise(){
    var number = 987654321.123456789;
    document.getElementById("preciseNum").innerHTML = number.toPrecision(11);
}

function fixed(){
    var number = 987654321.123456789;
    document.getElementById("fixedNum").innerHTML = number.toFixed(3);
}