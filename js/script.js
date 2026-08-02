function startSurprise(){

    window.location.href = "welcome.html";

}
function openSisters(){

    window.location.href = "sisters.html";

}
function openMessage(person){

    localStorage.setItem("selectedPerson", person);

    window.location.href = "message.html";

}
window.onload = function(){

    let person = localStorage.getItem("selectedPerson");


    let name = document.getElementById("personName");

    let message = document.getElementById("messageText");


    if(person == "mom"){

        name.innerHTML = "For My Beautiful Mumma Thirumala ❤️";

        message.innerHTML =
        "Thank you for being my biggest support, my safe place and my forever blessing. Your love makes my world beautiful. I LOVE YOU THIRUMALAAA!! ❤️";


    }


    else if(person == "Sumaaa!!"){

        name.innerHTML = "For My Lovely Small mommy 🌹";

        message.innerHTML =
        "Thank you for being a wonderful sibling to my mommy...!! the entire teen whom you raised loves you Shumaaaaa!!!🫶";


    }


    else if(person == "Sundarii💗"){

        name.innerHTML = "For My Sweet Aunty 🌼";

        message.innerHTML =
        "Hii sunadri... I love you so much! You and ajji are the favourite part of my PRIME!! Thank you for being a wonderful sister to my mommy and a loving aunty to me. I love you Sundariii!!💗";


    }


}



function goGallery(){

    let person = localStorage.getItem("selectedPerson");

    localStorage.setItem("galleryPerson", person);

    window.location.href = "gallery.html";

}
function goInteractive(){

    window.location.href = "interactive.html";

}
let count = 0;


function bloom(flower){

    flower.innerHTML = "🌸";

    count++;


    if(count == 3){

        document.getElementById("gardenMessage").innerHTML =
        "Three flowers for three beautiful hearts ❤️";

    }

}



function goFinal(){

    window.location.href = "final.html";

}
let galleryBox = document.getElementById("galleryBox");

if(galleryBox){

    let person = localStorage.getItem("galleryPerson");

    if(person == "mom"){

    galleryBox.innerHTML = `
    <img src="images/mom/all1.jpeg">
    <img src="images/mom/three2.jpeg">
    <img src="images/mom/three5.jpeg">
    <img src="images/mom/thiru1.jpeg">
    `;

}


    else if(person == "Sumaaa!!"){

    galleryBox.innerHTML = `
    <img src="images/shummaa/all1.jpeg">
    <img src="images/shummaa/suma1.jpeg">
    <img src="images/shummaa/three4.jpeg">
    <img src="images/shummaa/three5.jpeg">
    `;

}


    else if(person == "Sundarii💗"){

        galleryBox.innerHTML = `
        <img src="images/sundarii/all1.jpeg">
        <img src="images/sundarii/sundari1.jpeg">
        <img src="images/sundarii/sundari3.jpeg">
        <img src="images/sundarii/three2.jpeg">
        `;

    }

}