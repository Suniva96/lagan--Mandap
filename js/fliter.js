// Function to filter the venue list based on rating and price
function filterVenues() {
  const rating = document.getElementById('ratingInput').value;
  const price = document.getElementById('priceInput').value;

  // Get all the venue items
  const venueItems = document.querySelectorAll('.venue-item');

  venueItems.forEach(item => {
    const itemRating = parseFloat(item.getAttribute('data-rating')); // parse the rating as a float
    const itemPrice = parseInt(item.getAttribute('data-price')); // parse the price as an integer
    
    // Check if the venue matches the filter criteria
    const matchesRating = rating ? itemRating >= parseFloat(rating) : true;
    const matchesPrice = price ? itemPrice <= parseInt(price) : true;

    if (matchesRating && matchesPrice) {
      item.style.display = 'block'; // Show the item
    } else {
      item.style.display = 'none'; // Hide the item
    }
  });
}

// Event listeners for filter inputs
document.getElementById('ratingInput').addEventListener('input', filterVenues);
document.getElementById('priceInput').addEventListener('input', filterVenues);

// Clear Filters Button functionality
document.getElementById('clearFiltersBtn').addEventListener('click', () => {
  // Reset filter inputs
  document.getElementById('ratingInput').value = '';
  document.getElementById('priceInput').value = '';

  // Reset all venue items to visible
  const venueItems = document.querySelectorAll('.venue-item');
  venueItems.forEach(item => {
    item.style.display = 'block'; // Show all items
  });
});
