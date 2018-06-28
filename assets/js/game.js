//QUESTIONS:
// why isn't the target-win-loss div visible?
// what happens to function calls with/without ()?
// 
// 
// 
$(document).ready(function () {
    // DECLARATIONS
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
        $("#target-score").text("Target: " + target);
        $("#user-score").text("Your total is " + userScore);
    };
    // starting a game
    resetVars();
    //display new target
    // ================button-click actions================
    // ====================================================
    // wait for crystal choice. onclick
    // *** CHOICE1 is using JavaScript */
    // document.getElementById("cryst-one").onclick

    //*** CHOICE2 is using JQuery */
    $("#cryst-one").on("click", function () { scoreGem2(crystal1); }) //end on(click) block
    $("#cryst-two").on("click", function () { scoreGem2(crystal2); })
    $("#cryst-three").on("click", function () { scoreGem2(crystal3); })
    $("#cryst-four").on("click", function () { scoreGem2(crystal4); })
    // HELP! Check badFunction.html - WHY are on-clicks running w/o click?

    //Add gem value to userScore. Update page. If over target, loss
    var scoreGem2 = function scoreGem(val) {
        userScore += val;
        $("#user-score").text("Your total is " + userScore);
        if (userScore > target) { //loss
            losses++;
            $("#loss-count").text("Losses: " + losses)//write loss
            alert("You lost, sorry. Click OK to play again.");
            resetVars(); // HELP! WHY DO I NEED THE ()s?
        }
        else if (userScore == target) { //win
            wins++;
            $("#win-count").text("Wins: " + wins)//write loss
            alert("You win! Click OK to play again.");
            resetVars();
        } //end if block
    } //end scoreGem function
}); //end doc ready function


    //THIS CODE WAS in the butt1 click function
    // userScore += crystal1;
    // if (userScore > target) { //loss
    //     losses++;
    //     $("#loss-count").text("Losses: " + losses)//write loss
    //     alert("You lost, sorry. Click OK to play again.");
    //     resetVars(); // DO I NEED THE ()s?
    // }
    // else if (userScore == target) { //win
    //     wins++;
    //     $("#win-count").text("Wins: " + losses)//write loss
    //     alert("You win! Click OK to play again.");
    // } //end if block
