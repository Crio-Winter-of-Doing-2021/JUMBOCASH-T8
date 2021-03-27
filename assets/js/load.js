var tk = localStorage.getItem("token");

console.log(JSON.parse(tk));
var p = JSON.parse(tk);
console.log(p);
console.log(typeof(p));

fetch("http://127.0.0.1:8000/jumbocashapi/", {
        method: 'GET',
        headers: { "Authorization": "Token " + p },
    })
    .then((response) => {
        /* Error Handling */

        if (response.status === 401) {
            window.location.href = "https://jumbocashflow-app-t8.netlify.app/";
            throw Error(response.status);

        }
        console.log(response.status);
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    });