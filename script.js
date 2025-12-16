// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact form submit message
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", () => {
        alert("Thank you for contacting ROBOTRIX! We will get back to you soon.");
    });
}
