function forest2() {
        document.getElementById("text").textContent = "You are deep in the forest.";
        document.getElementById("vaihtoehto1").textContent = "New New option 1";
        document.getElementById("vaihtoehto2").textContent = "New New option 2";
        document.getElementById("vaihtoehto3").textContent = "New New option 3";
        document.getElementById("vaihtoehto4").textContent = "Exit";
        



    $('#vaihtoehto4').click(function () {
        forest1exit();
    });
    };

    