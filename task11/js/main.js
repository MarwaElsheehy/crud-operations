let name = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");

let mood = 'submit';
let tmp;
let data;
if (localStorage.info != null) {
    data = JSON.parse(localStorage.info);
} else {
    data = [];
}
btn.onclick = function () {
    let pro = {
        name:name.value,
        phone:phone.value,
        email:email.value,
        password:password.value
    }
    if (mood === 'submit') {
        data.push(pro);
    } else {
        data[tmp] = pro;
        mood = 'submit';
        btn.innerHTML = 'Submit'
    }
    localStorage.setItem('info', JSON.stringify(data));
    clear();
    show();
}
function clear () {
    name.value = '';
    phone.value = '';
    email.value = '';
    password.value = '';
}
function show () {
    let table = '';
    for (let i = 0; i < data.length; i++) {
        table +=
        `<tr>
        <td>${i + 1}</td>
        <td>${data[i].name}</td>
        <td>${data[i].phone}</td>
        <td>${data[i].email}</td>
        <td>${data[i].password}</td>
        <td><button onclick="updateDate(${i})" id="update">update</button></td>
        <td><button onclick="remove(${i})" id="delete">delete</button></td>
        <td><button onclick="read(${i})" id="view">view</button></td>
      </tr>`
    }
    document.getElementById("tbody").innerHTML = table;
}
show();
function remove (i) {
  data.splice(i, 1);
  localStorage.info = JSON.stringify(data);
  show();
}
function updateDate (i) {
    name.value = data[i].name;
    phone.value = data[i].phone;
    email.value = data[i].email;
    password.value = data[i].password;
    btn.innerHTML = 'Update';
    mood = 'update';
    tmp = i;
}
function read (i) {
    let para = '';
    para = `<h3>${data[i].name}</h3> <br/> <h3>${data[i].phone}</h3> <br/> <h3>${data[i].email}</h3> <br/> <h3>${data[i].password}</h3>`
    document.getElementById("popup").innerHTML = para;
    document.getElementById("popup").style.display = "block";
    setInterval(() => {
        document.getElementById("popup").style.display = "none";
    }, 3000)
}
