// Simple cart functionality (UI only, no actual payments)
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart (demo mode, no real purchase)');
    });
});

/*This function toggles the burger menu by creating a class attribute*/
function toggleMenu() {
  const menu = document.getElementById('menu');
  /*
  Creates constant variable menu using the element with ID "menu"
  from the document.
  */
  menu.classList.toggle('show');
  /*Create class attribute "show" for element with ID "menu"*/
}


// Mobile menu toggle (optional)
// You can expand this for mobile responsiveness
