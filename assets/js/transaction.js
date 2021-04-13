var tk = localStorage.getItem("token");

console.log(JSON.parse(tk));
var p = JSON.parse(tk);
let i = 1;
let income_save = document.getElementById('income-save');
let income_update = document.getElementById('income-update');
let expense_save = document.getElementById('expense-save');
let expense_update = document.getElementById('expense-update');
let pay_mode = ['h', 'Cash', 'Card', 'UPI', 'Others']
const display_income = (data, f) => {

    if (f === 1) {
        console.log("o")
        entity_table.innerHTML = "";
        i = 1;
    }
    data.forEach(income => {
        var dt = income.due_date;
        if (income.description == '') {
            income.description = 'Not provided';
        }
        if (income.due_date == '') {
            income.due_date = 'Not provided';
        }
        if (income.payment_status == 1) {
            income.payment_status = 'Pending';
        }
        if (income.payment_status == 2) {
            income.payment_status = 'Received';
            dt = '-';
        }
        entity_table.innerHTML +=
            ` <tr data-id=${income.id}>
            <th scope="row">${i++}</th>
            <td>${income.note}</td>
            <td style="color:green;">+ ${income.amount}</td>
            <td>${income.trans_date_time.split('T')[0]}</td>
            <td value=${income.due_date}>${dt}</td>
            <td>${pay_mode[income.payment_mode]}</td>
            <td>${income.payment_status}</td>
            <td>
                <i class="fas fa-edit " data-target="#incomeModal" data-toggle="modal"  id="income-edit-btn"></i>
                <i class="fas fa-align-justify ml-2" data-target="#more-info" data-toggle="modal" value="${income.cust_id}" id="income_info" ></i>
                <i class="fas fa-trash-alt ml-2" id="income-delete-btn"></i>

            </td>

        </tr>`;
    });

}



const display_expense = (data, ff) => {
    if (ff == 1) {
        entity_table.innerHTML = "";
        i = 1;
    }
    data.forEach(expense => {
        var dt = expense.due_date;
        if (expense.description == '') {
            expense.description = 'Not provided';
        }
        if (expense.due_date == '') {
            expense.due_date = 'Not provided';
        }
        if (expense.payment_status == 1) {
            expense.payment_status = 'Pending';
        }
        if (expense.payment_status == 2) {
            expense.payment_status = 'Paid';
            dt = "-";
        }

        entity_table.innerHTML +=
            ` <tr data-id=${expense.id}>
                <th scope="row">${i++}</th>
                <td>${expense.note}</td>
                <td style="color:red;">- ${expense.amount}</td>
                <td>${expense.trans_date_time.split('T')[0]}</td>
                <td value=${expense.due_date}>${dt}</td>
                <td>${pay_mode[expense.payment_mode]}</td>
                <td>${expense.payment_status}</td>
                <td>
                    <i class="fas fa-edit " data-target="#expenseModal" data-toggle="modal"  id="expense-edit-btn"></i>
                    <i class="fas fa-align-justify ml-2" data-target="#more-info" data-toggle="modal" value="${expense.sup_id}" id="expense_info"></i>
                    <i class="fas fa-trash-alt ml-2" id="expense-delete-btn"></i>
    
                </td>
    
            </tr>`;
    });

}
Promise.all([
    fetch(`https://jumbocashapi.herokuapp.com/incometransactions`, {
        method: 'GET',
        headers: { "Authorization": "Token " + p },
    }).then(value => value.json()),
    fetch(`https://jumbocashapi.herokuapp.com/expensetransactions`, {
        method: 'GET',
        headers: { "Authorization": "Token " + p },
    }).then(value => value.json())
]).then((value) => {

    display_income(value[0]);
    display_expense(value[1]);
    //json response
})


let side_nav = document.getElementById('side-nav');

side_nav.addEventListener('click', (e) => {

    let add_income = e.target.id == 'add_income';
    if (add_income) {
        income_save.style.display = 'block';
        income_update.style.display = 'none';
        document.getElementById('income_cust_select').removeAttribute('disabled', 'disabled');
        document.getElementById('income_mode_select').removeAttribute('disabled', 'disabled');
    }
    let add_expense = e.target.id == 'add_expense';
    if (add_expense) {
        expense_save.style.display = 'block';
        expense_update.style.display = 'none';
        document.getElementById('expense_sup_select').removeAttribute('disabled', 'disabled');
        document.getElementById('expense_mode_select').removeAttribute('disabled', 'disabled');
    }

})

let cust_email = document.querySelector('.cust_email');

const display_cust_email = (data) => {

    data.forEach(em => {
        cust_email.innerHTML += `<option value="${em.id}" >${em.email_id}</option>`;

    });
}

fetch("https://jumbocashapi.herokuapp.com/customers/", {
        method: 'GET',
        headers: { "Authorization": "Token " + p },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        display_cust_email(data);
    });


let sup_email = document.querySelector('.sup_email');

const display_sup_email = (data) => {

    data.forEach(em => {
        sup_email.innerHTML += `<option value="${em.id}" >${em.email_id}</option>`;

    });
}

fetch("https://jumbocashapi.herokuapp.com/suppliers/", {
        method: 'GET',
        headers: { "Authorization": "Token " + p },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        display_sup_email(data);
    });
income_save.addEventListener("click", (e) => {

    let inc_title = document.getElementById('income-text-input').value;
    let inc_date = document.getElementById('income-date-input').value;
    let inc_amt = document.getElementById('income-number-input').value;
    let inc_mode = document.getElementById('income_mode_select').value;
    let inc_status = document.getElementById('income_status_select').value;
    let inc_cust = document.getElementById('income_cust_select').value;
    let inc_desc = document.getElementById('income-Textarea').value;
    var today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();

    fetch("https://jumbocashapi.herokuapp.com/incometransactions", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": "Token " + p,

            },
            body: JSON.stringify({
                amount: inc_amt,
                cust_id: inc_cust,
                description: inc_desc,
                due_date: inc_date,
                note: inc_title,
                payment_mode: inc_mode,
                payment_status: inc_status,
                tdate: d,
                tmonth: m,
                tyear: y,

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
expense_save.addEventListener("click", (e) => {

    let sup_title = document.getElementById('expense-text-input').value;
    let sup_date = document.getElementById('expense-date-input').value;
    let sup_amt = document.getElementById('expense-number-input').value;
    let sup_mode = document.getElementById('expense_mode_select').value;
    let sup_status = document.getElementById('expense_status_select').value;
    let sup_sup = document.getElementById('expense_sup_select').value;
    let sup_desc = document.getElementById('expense-Textarea').value;
    var today = new Date();
    let sd = today.getDate();
    let sm = today.getMonth();
    let sy = today.getFullYear();



    fetch("https://jumbocashapi.herokuapp.com/expensetransactions", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Authorization": "Token " + p,

            },
            body: JSON.stringify({
                amount: sup_amt,
                sup_id: sup_sup,
                description: sup_desc,
                due_date: sup_date,
                note: sup_title,
                payment_mode: sup_mode,
                payment_status: sup_status,
                tdate: sd,
                tmonth: sm,
                tyear: sy,


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

let heading = document.querySelector('.bar');
heading.addEventListener('click', (e) => {

    income_save.style.display = 'block';
    income_update.style.display = 'none';
    expense_save.style.display = 'block';
    expense_update.style.display = 'none';
});

entity_table.addEventListener('click', (e) => {
    e.preventDefault();

    let inc_edit_btn = e.target.id == 'income-edit-btn';
    let inc_delete_btn = e.target.id == 'income-delete-btn';
    let sup_edit_btn = e.target.id == 'expense-edit-btn';
    let sup_delete_btn = e.target.id == 'expense-delete-btn';

    var id = e.target.parentElement.parentElement.dataset.id;

    /* DELETE REQUEST */
    if (inc_delete_btn) {

        fetch(`https://jumbocashapi.herokuapp.com/incometransactions/${id}`, {
                method: "DELETE",
                headers: { "Authorization": "Token " + p },
            })
            .then(() => location.reload())
            .catch(err => console.log(err))

    }

    if (inc_edit_btn) {
        income_save.style.display = 'none';
        income_update.style.display = 'block';
        document.getElementById('income_cust_select').setAttribute('disabled', 'disabled');
        document.getElementById('income_mode_select').setAttribute('disabled', 'disabled');
        console.log(e.target.parentElement.parentElement);
        let title_edit = e.target.parentElement.parentElement.children[1].textContent;
        let amt_edit = e.target.parentElement.parentElement.children[2].textContent.split(" ")[1];
        let date_edit = e.target.parentElement.parentElement.children[4].getAttribute('value');
        let status_edit = e.target.parentElement.parentElement.children[6].textContent;
        console.log(status_edit)
        document.getElementById('income-text-input').value = title_edit;
        document.getElementById('income-date-input').value = date_edit;
        document.getElementById('income-number-input').value = amt_edit;
        if (status_edit == 'Pending') {
            status_edit = '1';
        }
        if (status_edit == 'Received') {
            status_edit = '2';

        }
        document.getElementById('income_status_select').value = status_edit;

        console.log(id);


    }

    /* PATCH REQUEST */
    income_update.addEventListener('click', (e) => {
        let title = document.getElementById('income-text-input').value;
        let date = document.getElementById('income-date-input').value;
        let amt = document.getElementById('income-number-input').value;
        let status = document.getElementById('income_status_select').value;
        let desc = document.getElementById('income-Textarea').value;
        console.log(date)
        if (status == 'Pending') {
            status = '1';
        }
        if (status == 'Received') {
            status = '2';

        }


        fetch(`https://jumbocashapi.herokuapp.com/incometransactions/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Token " + p,
                },
                body: JSON.stringify({
                    amount: amt,
                    description: desc,
                    due_date: date,
                    note: title,
                    payment_status: status,

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

    /* DELETE REQUEST */
    if (sup_delete_btn) {

        fetch(`https://jumbocashapi.herokuapp.com/expensetransactions/${id}/`, {
                method: "DELETE",
                headers: { "Authorization": "Token " + p },
            })
            .then(() => location.reload())
            .catch(err => console.log(err))

    }

    if (sup_edit_btn) {
        expense_save.style.display = 'none';
        expense_update.style.display = 'block';
        document.getElementById('expense_sup_select').setAttribute('disabled', 'disabled');
        document.getElementById('expense_mode_select').setAttribute('disabled', 'disabled');
        console.log(e.target.parentElement.parentElement);
        let title_edit = e.target.parentElement.parentElement.children[1].textContent;
        let amt_edit = e.target.parentElement.parentElement.children[2].textContent.split(" ")[1];
        let date_edit = e.target.parentElement.parentElement.children[4].getAttribute('value');
        let status_edit = e.target.parentElement.parentElement.children[6].textContent;

        document.getElementById('expense-text-input').value = title_edit;
        document.getElementById('expense-date-input').value = date_edit;
        document.getElementById('expense-number-input').value = amt_edit;
        if (status_edit == 'Pending') {
            status_edit = '1';
        }
        if (status_edit == 'Paid') {
            status_edit = '2';

        }
        document.getElementById('expense_status_select').value = status_edit;




    }

    /* PATCH REQUEST */
    expense_update.addEventListener('click', (e) => {
        let title = document.getElementById('expense-text-input').value;
        let date = document.getElementById('expense-date-input').value;
        let amt = document.getElementById('expense-number-input').value;
        let status = document.getElementById('expense_status_select').value;
        let desc = document.getElementById('expense-Textarea').value;
        console.log(date)
        if (status == 'Pending') {
            status = '1';
        }
        if (status == 'Paid') {
            status = '2';

        }


        fetch(`https://jumbocashapi.herokuapp.com/expensetransactions/${id}/`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    "Authorization": "Token " + p,
                },
                body: JSON.stringify({
                    amount: amt,
                    description: desc,
                    due_date: date,
                    note: title,
                    payment_status: status,

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

    let info_body = document.querySelector('#modal-body');
    let income_info = e.target.id == 'income_info';
    let expense_info = e.target.id == 'expense_info';
    pty_mode = ['k', 'Cash', 'Card', 'UPI', 'Other Online Mode']
    console.log(income_info);
    console.log(expense_info);
    const display_cust_info = (data) => {
        info_body.innerHTML = '',
            info_body.innerHTML += `<div class="form-group row">
     <label for="supplier-text-input" class="col-4 col-form-label ml-3">Name : ${data.firstname} ${data.lastname}</label>

 </div> 
 <div class="form-group row">
                          
                            <label for="supplier-text-input" class="col-8 col-form-label ml-3">Phone No. : ${data.mobile_no}</label>


                        </div>`;
    }
    const display_income_info = (data) => {
        info_body.innerHTML += `<div class="form-group row">
    <label for="supplier-text-input" class="col-4 col-form-label ml-3">Title : ${data.note}</label>



</div>

<div class="form-group row">
    <label for="supplier-text-input" class="col-10 col-form-label ml-3">Payment Mode : ${pty_mode[data.payment_mode]}</label>

</div>
<div class="form-group row"> 
    <label for="supplier-text-input" class="col-10 col-form-label ml-3">Description : ${data.description}</label>

</div>
`
    }

    if (income_info) {

        let inc_info_id = e.target.parentElement.children[1].getAttribute('value');
        console.log(inc_info_id);
        Promise.all([
                fetch(`https://jumbocashapi.herokuapp.com/customers/${inc_info_id}`, {
                    method: 'GET',
                    headers: { "Authorization": "Token " + p },
                }).then(value => value.json()),
                fetch(`https://jumbocashapi.herokuapp.com/incometransactions/${id}`, {
                    method: 'GET',
                    headers: { "Authorization": "Token " + p },
                }).then(value => value.json())
            ])
            .then((value) => {
                display_cust_info(value[0]);
                display_income_info(value[1]);


            });


    }
    if (expense_info) {
        let exp_info_id = e.target.parentElement.children[1].getAttribute('value');
        Promise.all([
                fetch(`https://jumbocashapi.herokuapp.com/suppliers/${exp_info_id}`, {
                    method: 'GET',
                    headers: { "Authorization": "Token " + p },
                }).then(value => value.json()),
                fetch(`https://jumbocashapi.herokuapp.com/expensetransactions/${id}/`, {
                    method: 'GET',
                    headers: { "Authorization": "Token " + p },
                }).then(value => value.json())
            ])
            .then((value) => {
                display_cust_info(value[0]);
                display_income_info(value[1]);


            });



    }

})




let filter = document.querySelector('.filter');

filter.addEventListener('click', (e) => {
    let filter_mode = document.getElementById('filter_mode').value;
    let filter_trans = document.getElementById('filter_trans').value;
    let start_date = document.getElementById('start-date').value;
    let end_date = document.getElementById('end-date').value;
    let filter_status = document.getElementById('filter_status').value;
    let filter_amt = document.getElementById('filter_amt').value;
    console.log(filter_status);

    if (end_date !== '') {
        let s = end_date.split('-');
        var nd = parseInt(s[2]) + 1;
        s[2] = nd.toString();
        end_date = s.join('-');

    }


    if (filter_trans == 1 || filter_status === '2' && filter_trans != 2) {


        if (filter_mode === 'Payment Mode') {
            filter_mode = '';
        }
        if (filter_status === 'Payment status') {
            filter_status = '';

        }

        fetch(`https://jumbocashapi.herokuapp.com/incometransactions?payment_status=${filter_status}&trans_date_gt=${start_date}&trans_date_lt=${end_date}&payment_mode=${filter_mode}`, {
                method: 'GET',
                headers: { "Authorization": "Token " + p },
            })
            .then((response) => response.json())
            .then((data) => {
                let arr = data;
                if (filter_amt == 1) {
                    arr.sort(function(a, b) {
                        return a.amount - b.amount;
                    });
                } else if (filter_amt == 2) {
                    arr.sort(function(a, b) {
                        return b.amount - a.amount;
                    });
                }


                display_income(arr, 1);

            });

    }
    if ((filter_trans == 2 || filter_status === '3') && filter_status !== '2') {
        console.log(filter_status)
        let fs = filter_status;
        if (filter_status === '3') {
            fs = 2;
        }

        if (filter_mode === 'Payment Mode') {
            filter_mode = '';

        }
        if (filter_status === 'Payment status') {
            fs = '';

        }

        fetch(`https://jumbocashapi.herokuapp.com/expensetransactions?payment_status=${fs}&trans_date_gt=${start_date}&trans_date_lt=${end_date}&payment_mode=${filter_mode}`, {
                method: 'GET',
                headers: { "Authorization": "Token " + p },
            })
            .then((response) => response.json())
            .then((data) => {
                let arr = data;
                if (filter_amt == 1) {
                    arr.sort(function(a, b) {
                        return a.amount - b.amount;
                    });
                } else if (filter_amt == 2) {
                    arr.sort(function(a, b) {
                        return b.amount - a.amount;
                    });
                }
                display_expense(arr, 1);

            });
    }
    if ((filter_trans == 3 || filter_status === '1') && filter_status !== '3' && filter_status !== '2' && filter_trans != 1 && filter_trans != 2) {
        console.log(filter_status)
        if (filter_mode === 'Payment Mode') {
            filter_mode = '';
        }
        if (filter_status === 'Payment status') {
            filter_status = '';

        }
        if (filter_amt == 1 || (filter_amt == 2)) {
            alert("select income or expense !");
        }
        Promise.all([
                fetch(`https://jumbocashapi.herokuapp.com/incometransactions?payment_status=${filter_status}&trans_date_gt=${start_date}&trans_date_lt=${end_date}&payment_mode=${filter_mode}`, {
                    method: 'GET',
                    headers: { "Authorization": "Token " + p },
                }).then(value => value.json()),
                fetch(`https://jumbocashapi.herokuapp.com/expensetransactions?payment_status=${filter_status}&trans_date_gt=${start_date}&trans_date_lt=${end_date}&payment_mode=${filter_mode}`, {
                    method: 'GET',
                    headers: { "Authorization": "Token " + p },
                }).then(value => value.json())
            ]).then((value) => {
                console.log(value)
                display_income(value[0], 1);
                display_expense(value[1], 0);
                //json response
            })
            .catch((err) => {
                console.log(err);
            });

    }

});