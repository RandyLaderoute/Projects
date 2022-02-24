function Ride_Function(){          
    var Height, Can_ride;           
    
    Height = document.getElementById("Height").value;
    Can_ride= (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function vAge_function(){           
    var Age, Can_vote;           
    
    Age = document.getElementById("Age").value;
    Can_vote= (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}


function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;

}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " +Erik.Vehicle_Year;
}

function carEmily() {
    document.getElementById("New_and_This").innerHTML = 
    "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + " manufactured in " +Emily.Vehicle_Year;
}

function nestFunction() {

    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var start_Variable = 10;
        function plus_one() {start_Variable += 1;}
        plus_one();
        return start_Variable;
    }
}

 