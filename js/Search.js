document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".nav-search input");

  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const query = event.target.value.trim().toLowerCase();
      const venueCards = document.querySelectorAll(".venue-card");

      let found = false;

      venueCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        if (title.includes(query)) {
          card.scrollIntoView({ behavior: "smooth", block: "center" });
          card.classList.add("highlight");
          found = true;

          setTimeout(() => card.classList.remove("highlight"), 3000);
        }
      });

      if (!found) {
        alert("No venue found matching your search.");
      }
    }
  });
});
