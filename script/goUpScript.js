//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

//this executes each time user scrolls
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    let dwayne = document.getElementById("dwayne");
    let dwayne2 = document.getElementById("dwayne2");
    let dwayne3 = document.getElementById("dwayne3");
    let dwayne4 = document.getElementById("dwayne4");
    let dwayne5 = document.getElementById("dwayne5");
    let dwayne6 = document.getElementById("dwayne6");
        if(n==-1){
            dwayne.classList.replace("animate-right","animate-left");
            dwayne2.classList.replace("animate-right","animate-left");
            dwayne3.classList.replace("animate-right","animate-left");
            dwayne4.classList.replace("animate-right","animate-left");
            dwayne5.classList.replace("animate-right","animate-left");
            dwayne6.classList.replace("animate-right","animate-left");
        }else{
            dwayne.classList.replace("animate-left","animate-right");
            dwayne2.classList.replace("animate-left","animate-right");
            dwayne3.classList.replace("animate-left","animate-right");
            dwayne4.classList.replace("animate-left","animate-right");
            dwayne5.classList.replace("animate-left","animate-right");
            dwayne6.classList.replace("animate-left","animate-right");
        }
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds
}