var tk = localStorage.getItem("token");

console.log(JSON.parse(tk));
var p = JSON.parse(tk);
let id;
let form = document.getElementById('form');
const display_profile = (data) => {
    form.innerHTML = `<table class="table table-responsive ml-4">
    <tbody><tr>
        <td class="text-muted">First Name</td>
        <td>:</td>
        <td>${data[0].firstname}</td>
    </tr>
    <tr>
     <td class="text-muted">Last Name</td>
     <td>:</td>
     <td>${data[0].lastname}</td>
 </tr>

 <tr>
     <td class="text-muted">Business Name</td>
     <td>:</td>
     <td>${data[0].business_name}</td>
 </tr>

 <tr>
     <td class="text-muted">Email</td>
     <td>:</td>
     <td>${data[0].email}</td>
 </tr>
 <tr>
     <td class="text-muted">Mobile No.</td>
     <td>:</td>
     <td>${data[0].mobile_no}</td>
 </tr>
 <tr>
     <td class="text-muted">Address</td>
     <td>:</td>
     <td>${data[0].address}</td>
 </tr>
 <tr>
     <td class="text-muted">Pin code</td>
     <td>:</td>
     <td>${data[0].pincode}</td>
 </tr>
 <tr>
 <td></td>
 <td></td>
<td> <a type="button" href="form.html" style="float:right;" class="btn btn-dark" role="button" >Update</a></td>

 </tr>
</tbody>

</table>


`
}
fetch("https://jumbocashapi.herokuapp.com/retailers/profile/", {
        method: 'GET',
        headers: { "Authorization": "Token " + p },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        id = data[0].id;
        display_profile(data);
    });