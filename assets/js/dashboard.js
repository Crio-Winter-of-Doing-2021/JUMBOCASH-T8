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

fetch("http://127.0.0.1:8000/jumbocashapi/", {
        method: 'GET',
        headers: { "Authorization": "Token " + p },
    })
    .then((response) => response.json())
    .then((data) => {
        display_profile(data);
    });

let income_cust_select = document.getElementById('income_cust_select');
fetch("http://127.0.0.1:8000/jumbocashapi/customers", {
        method: 'GET',
        headers: { "Authorization": "Token " + p },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });



//Income Form
let income_title = document.getElementById('income-text-input').value;
let income_due_date = document.getElementById('income-date-input').value;
let income_amount = document.getElementById('income-number-input').value;
let income_mode = document.getElementById('income_mode_select').selectedIndex;
let income_status = document.getElementById('income_status_select').selectedIndex;
let income_description = document.getElementById('income-Textarea').value;
let income_save = document.getElementById('income_save');

income_save.addEventListener("click", (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/jumbocashapi/incometransactions", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": "Token " + p,
            },
            body: JSON.stringify({
                name,
                url,
                caption,
            }),
        })
        .then((response) => {
            /* Error Handling */

            return response.json();
        })
        .then((data) => {
            window.location.reload()
        })
        .catch((err) => {
            console.log(err);
        });
});