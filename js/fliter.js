// HAMBURGER MENU TOGGLE
document.getElementById("menu-toggle").addEventListener("click", () => {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
});

// FILTER FUNCTION
function filterVenues() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const rating = parseFloat(document.getElementById("ratingInput").value) || 0;
  const maxPrice = parseInt(document.getElementById("priceInput").value) || Infinity;

  const venues = document.querySelectorAll(".venue-item");

  venues.forEach(venue => {
    const name = venue.dataset.name.toLowerCase();
    const venueRating = parseFloat(venue.dataset.rating);
    const price = parseInt(venue.dataset.price);

    const matchesSearch = name.includes(search);
    const matchesRating = venueRating >= rating;
    const matchesPrice = price <= maxPrice;

    if (matchesSearch && matchesRating && matchesPrice) {
      venue.style.display = "block";
    } else {
      venue.style.display = "none";
    }
  });
}

// LISTEN TO FILTER INPUTS
document.getElementById("searchInput").addEventListener("input", filterVenues);
document.getElementById("ratingInput").addEventListener("input", filterVenues);
document.getElementById("priceInput").addEventListener("input", filterVenues);
