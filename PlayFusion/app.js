document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a.button");
    const displayMessage = () => alert("This feature is coming soon!");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            displayMessage();
        });
    });
});
// const video = document.querySelector(".main-banner  video");

// video.addEventListener("mouseenter", () => {
//  video.play();
// });

// video.addEventListener("mouseleave", () => {
//     video.pause();
// });