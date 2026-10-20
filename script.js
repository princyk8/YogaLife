
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after selecting a link.
navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

// Display a random yoga reminder.
const tips = [
    "Take a deep breath. Relax your shoulders. Begin again.",
    "Consistency matters more than perfection.",
    "Listen to your body and move at your own pace.",
    "Take a short break to stretch and breathe.",
    "Create a quiet space where you can focus on yourself.",
    "Stay hydrated and wear comfortable clothing.",
    "Never force a pose that causes pain."
];

const dailyTip = document.getElementById("dailyTip");
const tipButton = document.getElementById("tipButton");

tipButton.addEventListener("click", function () {
    const currentTip = dailyTip.textContent;
    let nextTip;

    do {
        nextTip = tips[Math.floor(Math.random() * tips.length)];
    } while (nextTip === currentTip);

    dailyTip.textContent = nextTip;
});

// Automatically display the current year in the footer.
document.getElementById("year").textContent =
    new Date().getFullYear();
