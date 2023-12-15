const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const slideWidth = document.querySelector(".slide").offsetWidth;
let currentIndex = 0;

function showSlide(index) {
  const newPosition = -index * slideWidth;
  slides.style.transform = `translateX(${newPosition}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % 5;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000);

function loadMoreWebinars() {
  const webinarsContainer = document.querySelector(".webinars-container");

  for (let i = 0; i < 6; i++) {
    const webinarColumn = document.createElement("div");
    webinarColumn.classList.add("webinar-column");
    webinarColumn.innerHTML = `
        <iframe width="100%" height="200" src="https://www.youtube.com/watch?v=CZ5vFQg3tXE" frameborder="0" allowfullscreen></iframe>
        <div class="webinar-info">
          <h2>Enabling Productivity in Hybrid World</h2>
          <p>The collective experience of the past two years has left a lasting imprint, fundamentally changing how we define the role of work in our lives. The Great Reshuffle is far from over...</p>
        </div>
      `;
    webinarsContainer.appendChild(webinarColumn);
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
