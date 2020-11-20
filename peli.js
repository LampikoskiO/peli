
var nyt = 0;
var location = [];

location[0]['sijainti'] = 'huone';
location[0]['image'] = '<img src="./gloomy_image.jpg" alt="huone"></img>';
location[0]['teksti'] = 'Tervetuloaekaan huoneeseen';
location[0]['options'][0]['txt'] = 'Mene toiseen';
location[0]['options'][0]['go'] = '1';
location[0]['options'][1]['txt'] = 'Mene toiseen';
location[0]['options'][1]['go'] = '1';
location[0]['options'][2]['txt'] = 'Mene toiseen';
location[0]['options'][2]['go'] = '1';
location[0]['options'][3]['txt'] = 'Mene toiseen';
location[0]['options'][3]['go'] = '1';

location[1]['sijainti'] = 'metsä';
location[1]['image'] = '<img src="./imagetest.jpg" alt="metsä"></img>';
location[1]['teksti'] = 'Tervetuloa metsään';
location[1]['options'][0]['txt'] = 'Mene takaisin';
location[1]['options'][0]['go'] = '0';
location[1]['options'][1]['txt'] = 'Mene eteenpäin';
location[1]['options'][1]['go'] = '2';
location[1]['options'][2]['txt'] = '';
location[1]['options'][2]['go'] = '2';
location[1]['options'][3]['txt'] = '';
location[1]['options'][3]['go'] = '2';


$document.ready(function () { 
    gameloop();
});

function gameloop() {
    $('.sijainti').html(location[nyt]['sijainti'] );
    $('.image').html(location[nyt]['image'] );
    $('#text').html(location[nyt]['teksti']);
    
    $('#vaihtoehto1').html(location[nyt]['options'][0]['txt']);
    $('#vaihtoehto1').bind('click', function () { 
        nyt = location[nyt]['options'][0]['go']
        gameloop();
    })
   
    $('#vaihtoehto2').html(location[nyt]['options'][1]['txt']);
    $('#vaihtoehto2').bind('click', function () { 
        nyt = location[nyt]['options'][1]['go']
        gameloop();
    })

     $('#vaihtoehto3').html(location[nyt]['options'][2]['txt']);
     $('#vaihtoehto3').bind('click', function () { 
        nyt = location[nyt]['options'][2]['go']
        gameloop();
    })

    $('#vaihtoehto4').html( location[nyt]['options'][3]['txt']);
    $('#vaihtoehto4').bind('click', function () { 
        nyt = location[nyt]['options'][3]['go']
        gameloop();
    })
   
}


/*
function peli() {

    document.getElementById("text").textContent = "You see a forest in front of you";
        document.getElementById("vaihtoehto1").textContent = "Enter the forest";
        document.getElementById("vaihtoehto2").textContent = "option 2";
        document.getElementById("vaihtoehto3").textContent = "option 3";
        document.getElementById("vaihtoehto4").textContent = "option 4";

}
    $('#vaihtoehto1').click(function () {
        forest1();
    });


    // When we click a option, the text changes and we travel to forest 1, a new function.

*/