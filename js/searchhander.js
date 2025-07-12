document.addEventListener("DOMContentLoaded", () => {
  // For pages that have a search input with id="search"
  const searchInput = document.getElementById("search");

  if (searchInput) {
    // Handle Enter key on search input
    searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const query = searchInput.value.trim();
        if (query) {
          // Redirect to venues page with search query as URL param
          const encodedQuery = encodeURIComponent(query);
          window.location.href = `./Venues.html?venue=${encodedQuery}`;
        }
      }
    });
  }

  // On the venues page: read URL param and highlight matching venue
  const params = new URLSearchParams(window.location.search);
  const venueParam = params.get("venue");

  if (venueParam) {
    // Normalize search string (lowercase, no spaces)
    const normalizedQuery = venueParam.toLowerCase().replace(/\s+/g, "");

    // Find venue card whose id matches normalized query
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
});
