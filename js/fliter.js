// Modal elements
const modal = document.getElementById("venueModal");
const modalDetails = document.getElementById("modal-details");
const closeBtn = document.querySelector(".close-btn");

// Open modal on DETAILS button click
document.querySelectorAll(".details-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const venue = btn.parentElement;

    const name = venue.querySelector("h4").innerText;
    const info = Array.from(venue.querySelectorAll("p"))
      .map((p) => `<p>${p.innerText}</p>`)
      .join("");

    const image = venue.querySelector("img").outerHTML;

    modalDetails.innerHTML = `
      <h2>${name}</h2>
      ${image}
      ${info}
      <p>More features coming soon!</p>
    `;

    modal.style.display = "block";
  });
});

// Close modal on X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal on click outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Filter inputs and button
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const ratingInput = document.getElementById("filter-rating");
const priceInput = document.getElementById("filter-price");

// Filtering function
function filterVenues() {
  const searchVal = searchInput.value.toLowerCase();
  const ratingVal = ratingInput.value;
  const priceVal = priceInput.value.toLowerCase();

  document.querySelectorAll(".venue-item").forEach((venue) => {
    const name = venue.querySelector("h4").innerText.toLowerCase();
    const text = venue.innerText.toLowerCase();
    const rating = venue.getAttribute("data-rating") || "";
    const price = venue.getAttribute("data-price") || "";

    const matchesSearch = name.includes(searchVal) || text.includes(searchVal);
    const matchesRating = !ratingVal || parseInt(rating) >= parseInt(ratingVal);
    const matchesPrice = !priceVal || price === priceVal;

    if (matchesSearch && matchesRating && matchesPrice) {
      venue.style.display = "block";
    } else {
      venue.style.display = "none";
    }
  });
}

// Filter on search button click
searchBtn.addEventListener("click", filterVenues);

// Filter on Enter key in search input
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    filterVenues();
  }
});

// Filter live on rating or price change
ratingInput.addEventListener("input", filterVenues);
priceInput.addEventListener("change", filterVenues);
