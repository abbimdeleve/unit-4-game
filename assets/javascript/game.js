
$(document).ready(function () {
    let compGuess = Math.floor(Math.random() * 120) + 19;
    $("#computerGuess").append(compGuess)
    let wins = 0;
    $("#wincount").append(wins);
    let losses = 0;
    $("#losscount").append(losses);
    let userTotal = 0
    let scoreOne = Math.floor(Math.random() * 12) + 1;
    let scoreTwo = Math.floor(Math.random() * 12) + 1;
    let scoreThree = Math.floor(Math.random() * 12) + 1;
    let scoreFour = Math.floor(Math.random() * 12) + 1;

    function startGame() {
        compGuess = Math.floor(Math.random() * 120) + 19;
        scoreOne = Math.floor(Math.random() * 12) + 1;
        scoreTwo = Math.floor(Math.random() * 12) + 1;
        scoreThree = Math.floor(Math.random() * 12) + 1;
        scoreFour = Math.floor(Math.random() * 12) + 1;
        userTotal = 0;
        $("#computerGuess").text(compGuess);
    }

    function checkScore() {
        // game
        if (userTotal > compGuess) {
            alert("You lose!");
            losses++;
            $("#losscount").append(losses);
            startGame();
        } else if (userTotal === compGuess) {
            alert("You win!");
            wins++;
            $("#wincount").append(wins);
            startGame();
        }
    }
    $("#gem1").on("click", function () {
        userTotal = scoreOne + userTotal;
        $("#totalScore").text(userTotal);
        checkScore();
    })
    $("#gem2").on("click", function () {
        userTotal = scoreTwo + userTotal;
        $("#totalScore").text(userTotal);
        checkScore();
    })
    $("#gem3").on("click", function () {
        userTotal = scoreThree + userTotal;
        $("#totalScore").text(userTotal);
        checkScore();
    })
    $("#gem4").on("click", function () {
        userTotal = scoreFour + userTotal;
        $("#totalScore").text(userTotal);
        checkScore();
    })

})








