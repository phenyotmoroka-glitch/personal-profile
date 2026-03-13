const form = document.getElementById("my-form");
const statusPopup = document.getElementById("status-popup");

form.addEventListener("submit", async function(event) {
  event.preventDefault(); // Prevents Formspree's redirect

  const data = new FormData(event.target);
  
  // Submit to Formspree using fetch (AJAX)
  fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      // 1. Show the popup
      statusPopup.style.display = "block";
      form.reset();

      // 2. Close it after 4 seconds (4000ms)
      setTimeout(() => {
        statusPopup.style.display = "none";
      }, 4000);
      
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  });
});
