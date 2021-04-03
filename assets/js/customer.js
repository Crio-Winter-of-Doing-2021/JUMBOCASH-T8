var tk = localStorage.getItem("token");

console.log(JSON.parse(tk));
var p = JSON.parse(tk);
let entity_table = document.getElementById('entity-table');
let update_btn = document.getElementById('customer-update');
let save_btn = document.getElementById('customer-save');

const display_customer = (data) => {
    let i = 1;
    data.forEach(cust => {
        if (cust.email_id == '') {
            cust.email_id = 'Not provided';
        }
        if (cust.mobile_no == '') {
            cust.mobile_no = 'Not provided';
        }
        entity_table.innerHTML +=
            `<tr data-id=${cust.id}>
    <th scope="row" >${i++}</th>
    <td >${cust.firstname} ${cust.lastname}</td>
    <td>${cust.mobile_no}</td>
    <td>${cust.email_id}</td>
    <td>
        <i class="fas fa-edit " data-target="#customerModal" data-toggle="modal" id="edit-btn"></i>
        <i class="fas fa-trash-alt ml-2" id="delete-btn"></i>

    </td>

</tr>
`;
    });

}


fetch("https://jumbocashapi.herokuapp.com/customers", {
        method: 'GET',
        headers: { "Authorization": "Token " + "ea84b10345b9e5329e65fa5b602105053c2654d2" },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        display_customer(data);
    });

let add_customer = document.getElementById('add_customer');
if (add_customer) {
    save_btn.style.display = 'block';
    update_btn.style.display = 'none';
}


save_btn.addEventListener("click", (e) => {

    let cust_firstname = document.getElementById('customer-firstname-input').value;
    let cust_lastname = document.getElementById('customer-lastname-input').value;
    let cust_num = document.getElementById('customer-number-input').value;
    let cust_email = document.getElementById('customer-email-input').value;

    fetch("https://jumbocashapi.herokuapp.com/customers", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": "Token " + "ea84b10345b9e5329e65fa5b602105053c2654d2",

            },
            body: JSON.stringify({
                firstname: cust_firstname,
                lastname: cust_lastname,
                mobile_no: cust_num,
                email_id: cust_email,

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

});

entity_table.addEventListener('click', (e) => {
    e.preventDefault();
    let edit_btn = e.target.id == 'edit-btn';
    let delete_btn = e.target.id == 'delete-btn';
    let parent = e.target.parentElement;
    let id = e.target.parentElement.parentElement.dataset.id;

    /* DELETE REQUEST */
    if (delete_btn) {

        fetch(`https://jumbocashapi.herokuapp.com/customers/${id}`, {
                method: "DELETE",
                headers: { "Authorization": "Token " + "ea84b10345b9e5329e65fa5b602105053c2654d2" },
            })
            .then(() => location.reload())
            .catch(err => console.log(err))

    }

    if (edit_btn) {
        income_save.style.display = 'none';
        update_btn.style.display = 'block';
        let firstname_edit = parent.parentElement.children[1].textContent.split(" ")[0];
        let lastname_edit = parent.parentElement.children[1].textContent.split(" ")[1];
        let num_edit = parent.parentElement.children[2].textContent;
        let email_edit = parent.parentElement.children[3].textContent;
        document.getElementById('customer-firstname-input').value = firstname_edit;
        document.getElementById('customer-lastname-input').value = lastname_edit;
        document.getElementById('customer-number-input').value = num_edit;
        document.getElementById('customer-email-input').value = email_edit;
        console.log(id);


    }

    /* PATCH REQUEST */
    update_btn.addEventListener('click', (e) => {
        var firstname = document.getElementById('customer-firstname-input').value;
        var lastname = document.getElementById('customer-lastname-input').value;
        var num = document.getElementById('customer-number-input').value;
        var email = document.getElementById('customer-email-input').value;

        fetch(`https://jumbocashapi.herokuapp.com/customers/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Token " + "ea84b10345b9e5329e65fa5b602105053c2654d2",
                },
                body: JSON.stringify({
                    firstname: firstname,
                    lastname: lastname,
                    mobile_no: num,
                    email_id: email,

                }),
            })
            .then(response => {
                if (response.status === 400) {
                    throw Error(response.status);
                }
                return response.json()
            })
            .then(() => location.reload())
    })

})