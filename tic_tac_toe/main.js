//This variable keeps track of whose turn it is.
let activePlayer = "X";
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXOrO(squaresNumber){
    //This doncition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of selectedSquare array
    //to see i f it contains the sqaure number clicked on.
    if (!selectedSquares.some(element => element.includes(squaresNumber))){
        //This variable retrieves the html element id that was clicked.
        let select = document.getElementById(squaresNumber);
        //This condition checks who's turn it is.
        if(activePlayer === 'X'){
            //If activePlayer is equal to 'x', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("/Images/x.png")';
            //activePlayer may only be 'X' or 'O' som if not 'X' it must be 'O'
        } else {
            //If activePlayer is equal to 'O', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("/Images/o.png")';
        }
        //squareNumber and activePlayer are concatenated togetehr and added to array.
        selectedSquares.push(squaresNumber + activePlayer);
        //This calls a fucntion to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if(activePlayer === 'X'){
            activePlayer = 'O';
            
        }else {
            activePlayer = 'X';
        }
        
        //This function plays placement sound.
        audio('./media/place.mp3');
        //This condition checks to see it is the computers turn.
        if(activePlayer === 'O'){
            disableClick();
            //This function waits 1 second before computer places image and enables click.
            setTimeout(function (){ computersTurn();}, 1000)
        }
        //Returning true is needed for our computersTurn () function to work.
        return true;

    }
    //This function results in a random square being selected.
    function computersTurn() {
        //This bolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8.
        let pickASquare;
        //This condition allows our loop to keep trying if a square is selected already.
        while(!success){
            //A Random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)){
                //this line calls the function.
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            }
        }
    }
}

//This fucntion parses the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw line if condition is met
function checkWinConditions() {
    if  (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50,100,558,100)} // X 012
    else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50,304,558,304)} // X 345
    else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50,508,558,508)} // X 678
    else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100,50,100,558)} // X 036
    else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304,50,304,558)} // X 147
    else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508,50,508,558)} // X 258
    else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100,508,510,90)} // X 642
    else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100,100,520,520)} // X 048
    else if (arrayIncludes('0X', '1X', '2X')) {drawWinLine(50,100,558,100)} // X 012
    else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50,304,558,304)} // O 345
    else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50,508,558,508)} // O 678
    else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100,50,100,558)} // O 036
    else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304,50,304,558)} // O 147
    else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508,50,508,558)} // O 258
    else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100,508,510,90)} // O 642
    else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100,100,520,520)} // O 048
    else if (selectedSquares.length >= 9){
        //This function playes the tie game sound.
        audio('.media/tie.mp3');
        //This function sets a .3 second timer before resetGame is called.
        setTimeout(function () {resetGame();}, 1000)
    }

    //This function checks if an array includes 3 strongs. It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC){
        //These 3 variables will be used to check if 3 in a row.
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        // If the 3 variables we pass are all included in our array true is
        //returned and our else if condition executes the drawWinLine function.
        if (a === true && b === true && c === true) {return true}
        
    }
}

//This function makes our body eleemnt temporarily unclickable
function disableClick() {
    //This makes our body unclickable
    body.style.pointerEvents = 'none';
    //This makes our body clickable again after 1 seconds.
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//this function takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3)
function audio(audioURL) {
    //We creat a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound.
    audio.play();
}

//This function utilizes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    //This line access our html canvas element.
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
    //This line indicates where the start of the line's x axis is.
    let x1 = coordX1,
    y1 = coordY1,
    x2 = coordX2,
    y2 = coordY2,
    x = x1,
    y = y1;


    //This function interacts with the canvas
    function animateLineDrawing () {
        //this variable creates a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from last loop iteration.
        c.clearRect(0, 0, 608, 608)
        //This method starts a new path
        c.beginPath();
        // This method moves us to ao starting point for our line.
        c.moveTo(x1, y1)
        // This mothod indicates the end point in our lin.
        c.lineTo(x, y)
        //This method sets the width of our line.
        c.lineWidth = 10;
        //This method sets the color of our line.
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //This method draws everything we laid out above.
        c.stroke();
        //This condition checks if we've reached the endpoint.
        if(x1 <= x2 && y1 <= y2){
            //this condition adds 10 to the previous end x point.
            if (x < x2) {x += 10;}
            //This condition adds 10 to the previous end y point.
            if ( y < y2) {y += 10;}
            //This condition cancels our animation loop
            //if we've reach the end points.
            if (x >= x2 && y >= y2) {cancelAnimationFrame (animationLoop);}
        }

        //This condition is similar to the one above.
        //This is necessary for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
        }
    }

    //This function clears our canvas after our win line is drawn.
    function clear() {
        //this line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        //This line clears our canvas.
        c.clearRect(0, 0, 608, 608);
        //This line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //This line disallows clicking while the win sound is playingf
    disableClick();
    //This line plays the win sounds.
    audio('media/winGame.mp3');
    //This line calls our main animation loop.
    animateLineDrawing();
    //This line waits 1 second. The, clears canvas, resets teh game, and allows clickin again.
    setTimeout(function () {clear(); resetGame(0);}, 1000)
}

//This function resets the game in the event of a tie or a win.
function resetGame() {
    //This for loop iterates through each HTML square element
    for (let i = 0; i < 9; i++){
        //This variable gets the element of i.
        let square = document.getElementById(String(i))
        //This removes our elements backgroundImage.
        square.style.backgroundImage = ''
    }
    //This reset our array so it is empty and we can start over.
    selectedSquares = [];
}