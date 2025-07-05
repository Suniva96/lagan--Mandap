// Search filter functionality
const searchInput = document.getElementById('searchInput');
const venueCards = document.querySelectorAll('.venue-card');

searchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase();

  venueCards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    const address = card.querySelectorAll('p')[0].textContent.toLowerCase();

    if (name.includes(query) || address.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});
