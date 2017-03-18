/*jslint browser:true*/
/*global mapOptions,img,alert,map,modal,firebase,modalImg,span,woman,man,kids,videos,captionText,marker,google,*/
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    "use strict";
    modal.style.display = "none";
};

var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

//clicks image
img.onclick = function () {
    "use strict";
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};
//clicks image
img2.onclick = function () {
    "use strict";
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

};
//clicks image
img3.onclick = function () {
    "use strict";
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

};
//clicks image
img4.onclick = function () {
    "use strict";
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

};
//clicks image
img5.onclick = function () {
    "use strict";
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

};


//scrolls to view of women
var woman = document.getElementsByName("woman");
var row1 = document.getElementByName("row1");
woman.onclick = function () {
    "use strict";
    row1.scrollIntoView();


};

//scrolls to view of man pictures
var man = document.getElementsByName("man");
man.onclick = function () {
    "use strict";
    man.scrollIntoView();

};

//scrolls to view of kids pictures
var kids = document.getElementsByName("kids");
kids.onclick = function () {
    "use strict";
    kids.scrollIntoView();
};

//scrolls to view of videos
var videos = document.getElementsByName("videos");
videos.onclick = function () {
    "use strict";
    videos.scrollIntoView();
};

//navigation menu
function myFunction() {
    "use strict";
    var x = document.getElementById("myTopnav");
    if (x.className === "main-menu") {
        x.className += " responsive";
    } else {
        x.className = "main-menu";
    }
}
//grabs longitude and latitude of location at map
function initMap() {
    "use strict";
    var uluru = {lat: -25.363, lng: 131.044};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
//clears out responses after submit button is pressed




  // Initialize Firebase
var config = {
    apiKey: "AIzaSyDGBLwHyM6nWb0cnXPBqadYejoU9IFm92E",
    authDomain: "salonla-eb110.firebaseapp.com",
    databaseURL: "https://salonla-eb110.firebaseio.com",
    storageBucket: "salonla-eb110.appspot.com",
    messagingSenderId: "847899281760"
};
firebase.initializeApp(config);
var storage = firebase.storage();

var storageRef = storage.ref();
var imagesRef = storageRef.child('images');

var fileName = '/..Pic1.jpg';
var spaceRef = storageRef.child('images/..Pic1.jpg');

var path = spaceRef.fullPath;
var name = spaceRef.name;
var imagesRef = spaceRef.parent;
