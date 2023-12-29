function redirectToYesPage(){
   window.location.href='yes.html';
}

function redirectToNoPage(){
    window.location.href='no.html';
}

function shift(){
    var noButton = document.querySelector('.answer:last-child');

    // Calculate random positions (adjust the range as needed)
    var randomLeft = Math.floor(Math.random() * window.innerWidth);
    var randomTop = Math.floor(Math.random() * window.innerHeight);

    // Set the random positions
    noButton.style.left = randomLeft + 'px';
    noButton.style.top = randomTop + 'px';
}