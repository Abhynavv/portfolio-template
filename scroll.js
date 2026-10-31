document.documentElement.classList.add("js");

// progress bar
const bar = document.createElement("div");
bar.className = "progress";
document.body.prepend(bar);

function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = "scaleX(" + p + ")";
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// reveal sections as they enter the screen
const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
        if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll("main section, footer").forEach(function (el) {
    el.classList.add("reveal");
    io.observe(el);
});