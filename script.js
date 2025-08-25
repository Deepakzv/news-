// Get the header element
const header = document.querySelector('.main-header');

// Get the initial offset position of the header
const sticky = header.offsetTop;

// Add the scroll event listener
window.addEventListener('scroll', () => {
    // Check if the page has been scrolled down past the header's initial position
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky-header');
    } else {
        header.classList.remove('sticky-header');
    }
});

// Get all the "Read More" buttons
const readMoreButtons = document.querySelectorAll('.read-more');

// Loop through each button and add a click event listener
readMoreButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents the link from navigating
        alert('You clicked on "Read More"! This would normally take you to the full article.');
    });
});