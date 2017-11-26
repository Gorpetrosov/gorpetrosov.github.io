$(function () {

    // DECLARING VARIABLES TO BE USED FOR CHOICE OF PLAYER & COMPUTER SIDE
    const PLAYER_START = "player";
    const COMPUTER_START = "computer";
    var whoStarted;
    var player, computer, chosenSquare, computerChoice, winner, idOf, randomNum, randomRaw, randomCol, removeNum;
    var usedSquares = new Array();
    var allCards = [];
    var checkCards = [];
    var playerTurn = false,
        computerTurn = false;
    var computerWon = false,
        playerWon = false;
    var gameSize;
    var cardValue = '';

    // IF THE PLAYER CHOOSES TO BE "X"
    $('#x').click(function () {

        // INITIALIZE VARIABLES FOR CHOICE OF PLAYER & COMPUTER SIDE
        player = 'X';
        computer = 'O';
        $('.side').addClass('rotate').delay(1000).slideUp(1500);
    });

    // IF THE PLAYER CHOOSES TO BE "O"
    $('#o').click(function () {

        // INITIALIZE VARIABLES FOR CHOICE OF PLAYER & COMPUTER SIDE
        player = 'O';
        computer = 'X';
        $('.side').addClass('rotate').delay(1000).slideUp(1500);
    });

    // IF THE USER CHOOSES TO BE THE FIRST"
    $('#player').click(function () {

        playerTurn = true;
        computerTurn = false;
        whoStarted = PLAYER_START;
        startGame();
    });

    // IF USER CHOICE  COMPUTER TO BE THE FIRST
    $('#computer').click(function () {

        playerTurn = false;
        computerTurn = true;
        whoStarted = COMPUTER_START;
        startGame();
        computerStartPlay();
    });


    function computerStartPlay() {

        setTimeout(function () {

            while (computerTurn == true) {
                // console.log("computerTurn");
                if (isDrew()) {
                    break;
                } else {
                    // randomNum = Math.floor(Math.random() * allCards.length);
                    // computerChoice = allCards[randomNum];
                    computerGo();
                    idOf = computerChoice;

                    var value = $("#" + idOf).val();

                    if (value === '') {
                        $("#" + idOf).val(computer);
                        usedSquares.push(computerChoice);

                        computerTurn = false;
                        playerTurn = true;
                        // setTimeout(whoWonOptimal, 100);
                        whoWonOptimal();
                        if ($(winner).val() === '') {
                            setTimeout(isDrew, 300);
                        }
                        break;
                    }

                }
            }
        }, 100);
    }

    function isDrew() {
        //  console.log(" isDrew() " + usedSquares);
        if (usedSquares.length >= gameSize * gameSize) {
            alert('Tied game!');
            $('.cards').prop('disabled', true);
            return true;
        } else {
            return false;
        }
    }



    function whoWonOptimal() {

        // console.log(checkCards);
        cardValue = $("#" + allCards[0][0]).val();
        var hasWinner = false;
        for (var i = 0; i < gameSize; i++) {
            for (var j = 0; j < gameSize; j++) {
                cardValue = $("#" + allCards[0][j]).val();
                console.log("column allCards value = " + $("#" + allCards[0][j]).val());

                if (columnCheck(j)) {
                    hasWinner = true;
                    console.log("colum = " + j);
                    break;
                }
                cardValue = $("#" + allCards[j][0]).val();
                console.log("raw allCards value = " + $("#" + allCards[j][0]).val());
                if (rawCheck(j)) {
                    hasWinner = true;
                    console.log("row = " + j);
                    break;
                }
            }
            if (hasWinner) {
                break;
            }
        }

        if (!hasWinner) {
            if (diagonalCheck()) {
                hasWinner = true;
            }
        }
        if (hasWinner) {
            setWinner(cardValue);
        }

        return playerTurn, computerTurn;
    }

    function columnCheck(column) {
        console.log("clumncheak cardValue =" + cardValue);
        for (var i = 0; i < gameSize; i++) {
            if (cardValue === "" || cardValue != $("#" + allCards[i][column]).val())
                return false;
        }
        return true;
    }

    function rawCheck(raw) {
        console.log("rawcheak cardvalu =" + cardValue);
        for (var i = 0; i < gameSize; i++) {
            if (cardValue === "" || cardValue != $("#" + allCards[raw][i]).val())
                return false;
        }
        return true;
    }

    function diagonalCheck() {

        var topDiagonalMatech = true;
        cardValue = $("#" + allCards[0][0]).val();
        for (var i = 0; i < gameSize; i++) {
            if (cardValue === "" || cardValue != $("#" + allCards[i][i]).val())
                topDiagonalMatech = false;
        }

        if (topDiagonalMatech) {
            return true;
        } else {
            cardValue = $("#" + allCards[gameSize - 1][0]).val();
            for (var j = 0; j < gameSize; j++) {
                if (cardValue === "" || cardValue != $("#" + allCards[gameSize - 1 - j][j]).val())
                    return false;
            }
            return true;
        }

    }
    // COMPUTER DECISIONS

    function otimalPosition() {
        var optimalCol = 0;
        var otimalRow = 0;
        for (var i = 0; i < gameSize; i++) {
            var itemID = 'card' + i + i;
            $(itemID).val();
        }
    }

    function computerGo() {
        // if (allUnchecked()) {
        randomCol = Math.floor(Math.random() * gameSize);
        randomRaw = Math.floor(Math.random() * gameSize);
        computerChoice = allCards[randomRaw][randomCol];
        return computerChoice, randomNum;
    }

    function allUnchecked() {
        var count = 0;
        for (var index = 0; index < gameSize; index++) {
            for (var j = 0; j < gameSize; j++) {}
            if (allCards[index][j] === ('card' + index + j)) {
                count++;
            }
        }

        return count === gameSize * gameSize;
    }
    // get submit value

    $('#submit').click(function () {
        gameSize = $('#size').val();
        allCards = gameBoard(gameSize);
        createTable(gameSize);

        $('.subsize').addClass('rotate').delay(1000).slideUp(1500);
        $('#secondpart').delay(2500).fadeIn(2000);
    });
    //creating gameboard and squer
    function createTable(gameSize) {
        var theader = '<table  width="50%">\n';
        var tbody = '';

        for (var k = 0; k < gameSize; k++) {
            allCards[k] = new Array(gameSize);
        }
        for (var i = 0; i < gameSize; i++) {
            tbody += '<tr>';
            for (var j = 0; j < gameSize; j++) {
                var itemId = "card" + i + j;
                allCards[i][j] = itemId;
                tbody += '<td >';
                tbody += '<div class="content" >' + '<input type="button" width="100%" height="100%"  id="' + itemId + '" class="square">' + '</div>';
                tbody += '</td>';

                $('#wrapper').on('click', '#' + itemId, function () {
                    var value = $(this).val();

                    chosenSquare = $(this).attr('id');

                    while (playerTurn === true) {

                        if (isDrew()) {
                            break;
                        } else {
                            if (value === '') {
                                $(this).val(player);
                                usedSquares.push(chosenSquare);
                                // console.log("Player click" + usedSquares);
                                playerTurn = false;
                                computerTurn = true;
                                whoWonOptimal();
                                //setTimeout(whoWon, 200);
                                break;
                            } else {
                                // DO NOTHING BUT ALERT THE USER TO PICK ANOTHER SQUARE
                                alert("I'm sorry, please choose another square");
                                break;
                            }
                        }
                    }
                    computerStartPlay();
                });
            }
            tbody += '</tr>\n';
        }

        var tfooter = '</table>';
        document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
    }

    function gameBoard(n) {
        var matrix = [];
        for (var i = 0; i < n; i++) {
            matrix[i] = new Array(n);
        }

        for (var k = 0; k < n; k++) {
            for (var j = 0; j < n; j++) {
                matrix[k][j] = "card";
            }
        }
        return matrix;
    }

    // WHEN THE RESET BUTTON IS PRESSED, RESET THE GAME
    $('#reset').click(function () {
        // EMPTY THE LIST OF USED SQUARES AND RESET ALL VARIABLES
        usedSquares = [];
        player = null, computer = null, chosenSquare = null, computerChoice = null, idOf = null, randomNum = null, removeNum = null;
        allCards = [];
        whoStarted = null;
        playerTurn = true, computerTurn = false;
        playerWon = false, computerWon = false;
        $('#secondpart').css('display', 'none');
        $('#container').css('display', 'none');
        $('.subsize').fadeIn(2000).removeClass('rotate');
        $('.side').fadeIn(2000).removeClass('rotate');
        $('.starter').fadeIn(2000).removeClass('rotate');
        $('.cards').val('').css("background", 'white').prop('disabled', false);
        $(this).removeClass('active');
    });
    // retry the game
    $('#tryAgain').click(function () {
        $('.square').attr('value', null);
        cardValue = null, idOf = null;
        playerWon = false, computerWon = false;
        usedSquares = [];
        checkCards = [];
        if (whoStarted === PLAYER_START) {
            playerTurn = true;
            computerTurn = false;
        } else if (whoStarted === COMPUTER_START) {
            playerTurn = false;
            computerTurn = true;
            computerStartPlay();
        }


    });

    function startGame() {
        $('.starter').addClass('rotate').delay(1000).slideUp(1500);
        // DISPLAY THE GAME BOARD
        $('#container').delay(2500).fadeIn(2000);
    }
    // findout the winner
    function setWinner() {
        console.log("cardValue = " + cardValue);
        console.log("player = " + player);
        console.log("computer = " + computer);

        if (cardValue === player) {
            alert('Congratulations player! You have won!');
            playerTurn = false;
            computerTurn = false;
            playerWon = true;
            computerWon = false;
            winner = "player"
            $('.cards').prop('disabled', true);
        } else if (cardValue === computer) {
            alert('Haha! I am triumphent once again!');
            playerTurn = false;
            computerTurn = false;
            winner = "computer"
            computerWon = true;
            playerWon = false;
            $('.cards').prop('disabled', true);
        }
    }

});
