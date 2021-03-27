const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
    localStorage.removeItem("token");
})
const backToTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) { //make the button visible
        backToTopButton.style.display = "block";
    } else { // hide the button
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
});