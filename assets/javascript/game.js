$(document).ready(function () {

    var arrFoodImg = ["assets/images/hotdog.jpg", 
                            "assets/images/donut.jpg", 
                            "assets/images/pizza.jpg", 
                            "assets/images/potatochip.jpg"];
    var numRandomNumber;
    var numCurrentTotal = 0;
    var numWins = 0;
    var numLosses = 0;

    //Adds food images to the page
    for (var i = 0; i < arrFoodImg.length; i++) {
        var imgFood = $("<img>").width("175px").height("125px");
        imgFood.addClass("food-image px-1");
        imgFood.attr({
            //Get the food image from the array variable
            "src": arrFoodImg[i],
            //Set the id attribute so we can select the food image later
            "id": "food-" + i
        });
        //Add the food image to the page
        $("#food-section").append(imgFood);
    };

    //Start the game function
    function InitializeGame() {
        //Set the random calorie number between 19 and 120
        numRandomNumber = Math.floor(Math.random() * 101) + 19;
        $("#random-number").text(numRandomNumber);

        //Set the foods random numbers between 1 and 12
        $(".food-image").each(function (index) {
            $(this).attr("value", Math.floor(Math.random() * 12) + 1);
        });

        //Set the current total to 0
        numCurrentTotal = 0;
        $("#number-total").text(numCurrentTotal);
    };

    //Function to check for a win on each food click
    //The game automatically re-starts on a win or a loss
    function CheckForWin() {
        if (numCurrentTotal > numRandomNumber) {
            alert("Sorry too many Calories. Try again!");
            numLosses++;
            $("#losses").text(numLosses);
            InitializeGame();
        }
        else if (numCurrentTotal === numRandomNumber) {
            alert("Good JOB! You are on the right track!");
            numWins++;
            $("#wins").text(numWins);
            InitializeGame();
        }
    }

    //Start the game
    InitializeGame();

    //On food click, add the foods value to running total
    $(".food-image").on("click", function () {
        numCurrentTotal += parseInt($(this).attr("value"));
        $("#number-total").text(numCurrentTotal);
        CheckForWin();
    });

});