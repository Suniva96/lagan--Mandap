document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const subject = form.subject.value;
    const message = form.message.value.trim();

    if (!name || !email || !phone || !subject || !message) {
      alert("Please fill all the fields before submitting.");
      return;
    }

    alert(
      "Thank you for contacting us, " +
        name +
        "! We have received your message."
    );

    form.reset();
  });
});
