
$(document).ready(function () {
    let compGuess = Math.floor(Math.random() * 120) + 19;
    $("#computerGuess").append(compGuess)
    let wins = 0;
    $("#wincount").append(wins);
    let losses = 0;
    $("#losscount").append(losses);
    let userTotal = 0
    let scoreOne = Math.floor(Math.random() * 12) + 1
    let scoreTwo = Math.floor(Math.random() * 12) + 1
    let scoreThree = Math.floor(Math.random() * 12) + 1
    let scoreFour = Math.floor(Math.random() * 12) + 1
    
    
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
        
        if (userTotal > compGuess) {
            alert("You have failed.");
            losses++;
            $("#losscount").text("Losses: " + losses);
            startGame();
        } else if (userTotal === compGuess) {
            alert("You have prevailed.");
            wins++;
            $("#wincount").text("Wins: " + wins);
            startGame();
        }
    }

    
    $("#gem1").on("click", function () {
        userTotal = scoreOne + userTotal;
        $("#totalScore").text("Your score: " + userTotal);
        checkScore();
    })
    $("#gem2").on("click", function () {
        userTotal = scoreTwo + userTotal;
        $("#totalScore").text("Your score: " + userTotal);
        checkScore();
    })
    $("#gem3").on("click", function () {
        userTotal = scoreThree + userTotal;
        $("#totalScore").text("Your score: " + userTotal);
        checkScore();
    })
    $("#gem4").on("click", function () {
        userTotal = scoreFour + userTotal;
        $("#totalScore").text("Your score: " + userTotal);
        checkScore();
    })

})








