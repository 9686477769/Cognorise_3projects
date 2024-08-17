document.getElementById('link1').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default action of the link
    alert('You clicked on BMIcalculator');
});

document.getElementById('link2').addEventListener('click', function(event) {
    event.preventDefault();
    alert('You clicked on Calculator');
});

document.getElementById('link3').addEventListener('click', function(event) {
    event.preventDefault();
    alert('You clicked on Portfolio');
});