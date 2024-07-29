document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const closeBtn = document.querySelector(".close-btn");

  // Function to show the popup
  function showPopup() {
    popup.style.display = "flex";
  }

  // Function to close the popup
  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });

  // Show popup every 10 minutes (600000 milliseconds)
  setInterval(showPopup, 600000);

  // Initial display
  setTimeout(showPopup, 5000); // Show after 5 seconds for demo purposes

  
});
