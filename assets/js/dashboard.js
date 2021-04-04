const logout = document.querySelector(".logout");
logout.addEventListener("click", (e) => {
    localStorage.removeItem("token");
})

const backToTopButton = document.querySelector("#back-to-top-btn");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) { //make the button visible
        backToTopButton.style.display = "block";
    } else { // hide the button
        backToTopButton.style.display = "none";
    }
});

window.addEventListener("load", () => {
    document.body.classList.remove("preload");
});

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");

    document.querySelector("#btnNav").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });

    document.querySelector(".nav__overlay").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

let nav_profile = document.getElementById('nav-profile');

const display_profile = (data) => {
    nav_profile.innerHTML = `<a href="form.html" class="nav-link text-white">${data[0].firstname}
    </a>`
}
var tk = localStorage.getItem("token");

console.log(JSON.parse(tk));
var p = JSON.parse(tk);

fetch("https://jumbocashapi.herokuapp.com/retailers/profile/", {
        method: 'GET',
        headers: { "Authorization": "Token " + p },
    })
    .then((response) => response.json())
    .then((data) => {
        display_profile(data);
    });