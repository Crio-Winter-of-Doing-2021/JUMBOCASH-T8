var tk = localStorage.getItem("token");
var token = JSON.parse(tk);
let entity_table = document.getElementById('entity-table');
let update_btn = document.getElementById('supplier-update');
let sup_save = document.getElementById('supplier-save');

const display_supplier = (data) => {
    let i = 1;
    data.forEach(sup => {
        if (sup.email_id == '') {
            sup.email_id = 'Not provided';
        }
        if (sup.mobile_no == '') {
            sup.mobile_no = 'Not provided';
        }
        entity_table.innerHTML +=
            `<tr data-id=${sup.id}>
                <th scope="row">${i++}</th>
                
                <td>${sup.firstname} ${sup.lastname}</td>
                <td>${sup.mobile_no}</td>
                <td>${sup.email_id}</td>
                <td>
                    <i class="fas fa-edit " data-target="#supplierModal" data-toggle="modal" id="edit-btn"></i>
                    <i class="fas fa-trash-alt ml-2"></i>

                </td>

            </tr>
            `;
    });

}

fetch("https://jumbocashapi.herokuapp.com/suppliers/", {
        method: 'GET',
        headers: { "Authorization": "Token " + token },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        display_supplier(data);
    });


let add_supplier = document.getElementById('add_supplier');
if (add_supplier) {
    sup_save.style.display = 'block';
    update_btn.style.display = 'none';
}
sup_save.addEventListener("click", (e) => {

    let sup_firstname = document.getElementById('supplier-firstname-input').value;
    let sup_lastname = document.getElementById('supplier-lastname-input').value;
    let sup_num = document.getElementById('supplier-number-input').value;
    let sup_email = document.getElementById('supplier-email-input').value;

    fetch("https://jumbocashapi.herokuapp.com/suppliers/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": "Token " + token,

            },
            body: JSON.stringify({
                firstname: sup_firstname,
                lastname: sup_lastname,
                mobile_no: sup_num,
                email_id: sup_email,

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

        fetch(`https://jumbocashapi.herokuapp.com/suppliers/${id}`, {
                method: "DELETE",
                headers: { "Authorization": "Token " + token },
            })
            .then(() => location.reload())
            .catch(err => console.log(err))

    }

    if (edit_btn) {
        sup_save.style.display = 'none';
        update_btn.style.display = 'block';
        let firstname_edit = parent.parentElement.children[1].textContent.split(" ")[0];
        let lastname_edit = parent.parentElement.children[1].textContent.split(" ")[1];
        let num_edit = parent.parentElement.children[2].textContent;
        let email_edit = parent.parentElement.children[3].textContent;
        document.getElementById('supplier-firstname-input').value = firstname_edit;
        document.getElementById('supplier-lastname-input').value = lastname_edit;
        document.getElementById('supplier-number-input').value = num_edit;
        document.getElementById('supplier-email-input').value = email_edit;
        console.log(id);


    }

    /* PATCH REQUEST */
    update_btn.addEventListener('click', (e) => {
        var firstname = document.getElementById('supplier-firstname-input').value;
        var lastname = document.getElementById('supplier-lastname-input').value;
        var num = document.getElementById('supplier-number-input').value;
        var email = document.getElementById('supplier-email-input').value;

        fetch(`https://jumbocashapi.herokuapp.com/suppliers/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Token " + token,
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
            .catch(() => console.log(err))
    })

})