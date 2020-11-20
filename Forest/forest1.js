function forest1() {
        document.getElementById("text").textContent = "You are at the entrance of the forest.";
        document.getElementById("vaihtoehto1").textContent = "Go deeper into the forest";
        document.getElementById("vaihtoehto2").textContent = "New option 2";
        document.getElementById("vaihtoehto3").textContent = "New option 3";
        document.getElementById("vaihtoehto4").textContent = "Exit";


    $('#vaihtoehto1').click(function () {
        forest2();
    });



    $('#vaihtoehto2').click(function () {
            
    });



    $('#vaihtoehto3').click(function () {
            
    });


    $('#vaihtoehto4').click(function () {
            forestexit();
    });

}
