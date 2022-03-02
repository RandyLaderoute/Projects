function myLoop(){
    var count = "";
    var i = 1;
    
    while (i <= 10){
        document.write(i = "hello");
        
    }
    document.getElementById("loop").innerHTML = "hello";
    
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var X;
function for_Loop() {
    for (X = 0; X < Instruments.length; X++) {
        Content += Instruments[X] + "<br>";
    }
    document.getElementById("instruments").innerHTML = Content;
}


function array_Function(){
    var sample_Name = [];
    sample_Name[0] = "Randy";
    sample_Name[1] = "Deanna";
    sample_Name[2] = "Jayce";
    sample_Name[3] = "Ethan";
    sample_Name[4] = "Jordan";
    document.getElementById("Array").innerHTML = "Sample name " + sample_Name[2] + ".";
}

function constant_function() {
    const X = 10;
    //X = 100;
    document.getElementById("Constant").innerHTML = "5 + 5 = " + X;
}

function let_function(){
    var X = 100;
    document.getElementById("Let_show").innerHTML = X + "<br>";
    {
        let X = 200;
        document.getElementById("Let_show1").innerHTML = X+ "<br>";
    }
    document.getElementById("Let_show2").innerHTML = X;
}




let student = {
    grade: "Pass",
    location: "British Columbia",
    age: "43",
    description : function(){
        return "student info " + this.grade + "," + this.location + "year old," + this.age + ".";
    }
};
document.getElementById("student_info").innerHTML = student.description();