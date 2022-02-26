var X = 10;         // X is global

function local_Function(){
    var Y = 10;                         //Y is local
    document.write(10 * X +"<br>");
    document.write(10 + Y);
    
}

function Pass_function(){
    if(new Date().getHours() > 22){
        document.getElementById("Pass_message").innerHTML = "Didn't pass"
    }else{
        document.getElementById("Pass_message").innerHTML = "You Passed"
    }
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning";
    }else if (Time >= 12 == Time < 18){
        Reply = "It is afternoon"
    }else{
        Reply = "It is Night"
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}