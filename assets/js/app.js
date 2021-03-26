const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container-2");
const login_submit = document.querySelector("#login-submit");
const signup_submit = document.querySelector("#signup-submit");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

signup_submit.addEventListener("click", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;

    fetch("http://127.0.0.1:8000/jumbocashapi/register", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                firstname: username,
                email: email,
                mobile_no: number,
                password: password,
            }),
        })
        .then((response) => {
            /* Error Handling */
            if (response.status === 400) {
                throw Error(response.status);
            }
            return response.json();
        })
        .then((data) => {
            window.onload();
        })
        .catch((err) => {
            console.log(err);
        });

});

login_submit.addEventListener("click", (e) => {

    let login_email = document.querySelector("#login-email").value;
    let login_password = document.querySelector("#login-password").value;
    fetch("http://127.0.0.1:8000/jumbocashapi/login/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                username: login_email,
                password: login_password,
            }),
        })
        .then((response) => {
            /* Error Handling */
            if (response.status === 400) {
                throw Error(response.status);
            }
            return response.json();
        })
        .then((data) => {
            window.location.replace("https://jumbocashflow-app-t8.netlify.app/dashboard.html")
        })
        .catch((err) => {
            console.log(err);
        });

});