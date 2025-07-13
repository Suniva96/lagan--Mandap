// This JavaScript code handles the global search functionality for both index.html and venues.html pages

document.addEventListener("DOMContentLoaded", () => {
  // === Global Search Bar Functionality ===
  const searchInput = document.getElementById("globalSearch");
  
  if (searchInput) {
    searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const query = searchInput.value.trim();
        if (query) {
          // Redirect to the venues page with the search query as a URL parameter
          const encodedQuery = encodeURIComponent(query);
          window.location.href = `./pages/Venues.html?venue=${encodedQuery}`;
        }
      }
    });
  }

  // === On Venues Page: Search for the Venue ===
  const params = new URLSearchParams(window.location.search);
  const venueParam = params.get("venue");

  if (venueParam) {
    // Normalize search string (lowercase, no spaces)
    const normalizedQuery = venueParam.toLowerCase().replace(/\s+/g, "");

    // Find venue card whose id matches the normalized query
    const venueElement = Array.from(document.querySelectorAll(".venue-item")).find((venue) => {
      return venue.id.toLowerCase() === normalizedQuery;
    });

    if (venueElement) {
      venueElement.scrollIntoView({ behavior: "smooth", block: "center" });
      venueElement.classList.add("highlight");

      // Remove highlight after 3 seconds
      setTimeout(() => {
        venueElement.classList.remove("highlight");
      }, 3000);
    } else {
      alert("Venue not found: " + venueParam);
    }
  }

  // === Venue Filter Functionality ===
  const ratingInput = document.getElementById("ratingInput");
  const priceInput = document.getElementById("priceInput");

  if (ratingInput && priceInput) {
    // Filter venues based on rating and price input
    function applyFilters() {
      const ratingValue = parseFloat(ratingInput.value);
      const priceValue = parseFloat(priceInput.value);
      
      document.querySelectorAll(".venue-item").forEach((venue) => {
        const venueRating = parseFloat(venue.getAttribute("data-rating"));
        const venuePrice = parseFloat(venue.getAttribute("data-price"));

        // Check if the venue meets the filter criteria
        const isRatingMatch = !ratingValue || venueRating >= ratingValue;
        const isPriceMatch = !priceValue || venuePrice <= priceValue;

        // Toggle visibility based on the filter criteria
        if (isRatingMatch && isPriceMatch) {
          venue.style.display = "block";
        } else {
          venue.style.display = "none";
        }
      });
    }

    // Add event listeners for filtering
    ratingInput.addEventListener("input", applyFilters);
    priceInput.addEventListener("input", applyFilters);
  }

  // === Navbar Toggle for Mobile View ===
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
