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
                username,
                email,
                number,
                password,
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