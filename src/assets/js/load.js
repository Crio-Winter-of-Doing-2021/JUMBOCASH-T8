var tk = localStorage.getItem("token");
var token = JSON.parse(tk);

fetch("https://jumbocashapi.herokuapp.com/retailers/profile/", {
        method: 'GET',
        headers: { "Authorization": "Token " + token },
    })
    .then((response) => {
        /* Error Handling */

        if (response.status === 401) {
            window.location.href = "https://jumbocashflow-app-t8.netlify.app/";
            throw Error(response.status);

        }
        // console.log(response.status);
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });