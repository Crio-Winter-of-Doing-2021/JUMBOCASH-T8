var tk = localStorage.getItem("token");

var p = JSON.parse(tk);
// console.log(p);

fetch("https://jumbocashapi.herokuapp.com/retailers/profile/", {
        method: 'GET',
        headers: { "Authorization": "Token " + p },
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