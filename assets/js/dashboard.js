let tk = localStorage.getItem("token");

if (tk) {
    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', 'tk');
    fetch("http://127.0.0.1:8000/jumbocashapi/", {
            method: 'GET',
            headers: myHeaders,
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

}
const logout = document.getElementById("logout");
logout.addEventListener("click", (e) => {
    localStorage.removeItem("token");
})


// if (token) {

//     res = // call /jumbocashi api endpoint with token

//         if res = true
//     redirect to dashboard
//     else
//         redirect to login
// }