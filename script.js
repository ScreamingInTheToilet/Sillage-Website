// Simple cart functionality (UI only, no actual payments)
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart (demo mode, no real purchase)');
    });
});

// Mobile menu toggle (optional)
// You can expand this for mobile responsiveness