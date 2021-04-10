
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container-2");
const login_submit = document.getElementById("login-submit");
const signup_submit = document.querySelector("#signup-submit");

login_submit.addEventListener("click", (e) => {
    console.log("click");
    let login_email = document.getElementById("login-email").value;
    let login_password = document.getElementById("login-password").value;

    fetch("https://jumbocashapi.herokuapp.com/login/", {
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
            console.log("ee");
            if (response.status === 400) {
                throw Error(response.status);
            }

            return response.json();

        })
        .then((data) => {
            let tk = data.token;
            console.log("jj");
            localStorage.setItem("token", JSON.stringify(tk));
            window.location.href = "https://jumbocashflow-app-t8.netlify.app/dashboard.html";

        })
        .catch((err) => {
            console.log(err);
        });

});

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

    fetch("https://jumbocashapi.herokuapp.com/register", {
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
            location.reload()
        })
        .catch((err) => {
            console.log(err);
        });

});
