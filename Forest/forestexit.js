function forestexit() {
    document.getElementById("text").textContent = "You clicked option 4, you exit the forest." + "</br>" + "Please wait a few seconds :)";
    setTimeout(function () {
        peli();
    }, 3000);
    
}