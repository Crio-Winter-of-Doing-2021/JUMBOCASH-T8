let inc_btn = document.querySelector('.inc-btn');
let ex_btn = document.querySelector('.ex-btn');

const cal_graph = (data) => {
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (let itr = 0; itr < data.length; itr++) {
        arr[data[itr].tmonth] += data[itr].amount;
    }
    return arr;
}
const graph = (ty, arr) => {
    var ctx = document.getElementById('myChart').getContext('2d');
    let lb;
    if (ty == 1) {
        lb = `Income ${yyyy}`;
    } else {
        lb = `Expense ${yyyy}`;
    }
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: lb,
                data: [`${arr[1]}`, `${arr[2]}`, `${arr[3]}`, `${arr[4]}`, `${arr[5]}`, `${arr[6]}`, `${arr[7]}`, `${arr[8]}`, `${arr[9]}`, `${arr[10]}`, `${arr[11]}`, `${arr[12]}`],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
let today = new Date();
let yyyy = today.getFullYear();


inc_btn.addEventListener('click', (e) => {
    fetch(`https://jumbocashapi.herokuapp.com/incometransactions?tyear=${yyyy}`, {
            method: 'GET',
            headers: { "Authorization": "Token " + token },
        })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            // console.log('inc');
            arr = cal_graph(data);
            graph(1, arr);
        });
});
ex_btn.addEventListener('click', (e) => {
    fetch(`https://jumbocashapi.herokuapp.com/expensetransactions?tyear=${yyyy}`, {
            method: 'GET',
            headers: { "Authorization": "Token " + token },
        })
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            // console.log('ex');
            arr = cal_graph(data);
            graph(-1, arr);
        });
});

fetch(`https://jumbocashapi.herokuapp.com/incometransactions?tyear=${yyyy}`, {
        method: 'GET',
        headers: { "Authorization": "Token " + token },
    })
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        arr = cal_graph(data);
        graph(1, arr);

    });