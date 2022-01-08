var tk = localStorage.getItem("token");
var token = JSON.parse(tk);
let id;

fetch("https://jumbocashapi.herokuapp.com/retailers/profile/", {
        method: 'GET',
        headers: { "Authorization": "Token " + token },
    })
    .then((response) => response.json())
    .then((data) => {
        id = data[0].id;
    });

let submit_btn = document.getElementById('submit-btn');

submit_btn.addEventListener('click', (e) => {
    let first_name = document.getElementById('firstname').value;
    let last_name = document.getElementById('lastname').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('con-password').value;
    let business = document.getElementById('business').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let add = document.getElementById('text').value;
    let code = document.getElementById('code').value;

    if (password !== confirm_password) {
        alert("Password doesn't match.Please write again !");
    } else if (password === confirm_password) {
        fetch(`https://jumbocashapi.herokuapp.com/retailers/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Token " + token,

                },
                body: JSON.stringify({
                    address: add,
                    business_name: business,
                    email: email,
                    firstname: first_name,
                    lastname: last_name,
                    mobile_no: number,
                    pincode: code,
                    password: confirm_password,
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
                window.location.reload()

            })
            .catch((err) => {
                console.log(err);
            });
    }


});