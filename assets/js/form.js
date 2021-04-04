var tk = localStorage.getItem("token");

console.log(JSON.parse(tk));
var p = JSON.parse(tk);
let id;

fetch("https://jumbocashapi.herokuapp.com/retailers/profile/", {
        method: 'GET',
        headers: { "Authorization": "Token " + p },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        id = data[0].id;
    });

let sub_btn = document.getElementById('submit-btn');

sub_btn.addEventListener('click', (e) => {
    let firstname = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let password = document.getElementById('password').value;
    let con_password = document.getElementById('con-password').value;
    let business = document.getElementById('business').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let add = document.getElementById('text').value;
    let code = document.getElementById('code').value;
    console.log(password, con_password)
    if (password !== con_password) {
        alert("Please write correct password !");
    } else if (password === con_password) {
        fetch(`https://jumbocashapi.herokuapp.com/retailers/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Token " + p,

                },
                body: JSON.stringify({
                    address: add,
                    business_name: business,
                    email: email,
                    firstname: firstname,
                    lastname: lastname,
                    mobile_no: number,
                    pincode: code,
                    password: con_password,
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