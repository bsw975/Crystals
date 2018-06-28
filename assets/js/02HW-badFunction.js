$(document).ready(function () {
    // DECLARATIONS
    var inGame = true;
    var userScore = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;
    var target = 0;
    var losses = 0;
    var wins = 0;

    //NEW game! //CHOOSE vars. crystals 1-12, target 18-120
    //reset score 
    function resetVars() {
        target = Math.floor(Math.random() * 102) + 19;
        crystal1 = Math.floor(Math.random() * 12);
        crystal2 = Math.floor(Math.random() * 12);
        crystal3 = Math.floor(Math.random() * 12);
        crystal4 = Math.floor(Math.random() * 12);
        userScore = 0;
    };
    // function playGame() {P{}
        resetVars();
    //display new target
    $("#target-score").text(target + " is target score")
    $("#target-score").append("<br>" + userScore + " is userScore")
    $("#target-score").append("<br>" + crystal1 + " is crystal1")

// ========================button-click actions========================
    //wait for crystal choice. onclick
    //*** CHOICE1 is using JavaScript */
    // document.getElementById("cryst-one").onclick

    //*** CHOICE2 is using JQuery */
    $("#cryst-one").on("click", scoreGem(crystal1))
    $("#cryst-two").on("click", scoreGem(crystal2))
    $("#cryst-three").on("click", scoreGem(crystal3))
    $("#cryst-four").on("click", scoreGem(crystal4))
// HELP! WHY are these running on page load?

    //if over target, loss
    function scoreGem(val) {
        console.log("Why is scoreGem running?");
        userScore += val;
        if (userScore > target) { //loss
            losses++;
            $("#loss-count").text("Losses: " + losses)//write loss
            alert("You lost, sorry. Click OK to play again.");
            resetVars(); // DO I NEED THE ()s?
        }
        else if (userScore = target) { //win
            $()
        } //end if block
    } //end function

    // resetVars

})
; //end doc ready function