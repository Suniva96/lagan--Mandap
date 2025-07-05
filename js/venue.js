const modal = document.getElementById("venueModal");
const modalDetails = document.getElementById("modal-details");
const closeBtn = document.querySelector(".close-btn");

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

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
