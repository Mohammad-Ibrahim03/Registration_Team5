
let _users = [];

const regForm = document.getElementById("regForm");
const nameInput = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const address = document.getElementById("address");
const confirmPassword = document.getElementById("confirmPassword");
let nextUser = 1;

const loginForm = document.getElementById("loginForm");
const loginPassword = document.getElementById("loginPassword");
const loginEmail = document.getElementById("loginEmail");
const msg= document.getElementById("message");

regForm.addEventListener("submit", function (event) {
    event.preventDefault();
    _users.push({
        id: nextUser,
        FullName: nameInput.value,
        Email: email.value,
        Password: password.value,
        Address: address.value,

    })
    console.log(_users);
    nextUser++;
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    msg.innerHTML = "";
    const existingUser = _users.find((user) => user.Email === loginEmail.value);
    let p= document.createElement("p");


    if (!existingUser) {
    
        p.textContent="Email not found. Please register first.";
        msg.appendChild(p);
        return;
    }

    if (existingUser.Password === loginPassword.value) {
         p.textContent="Login successful! Welcome " + existingUser.FullName;
        msg.appendChild(p);
        loginForm.reset();
    } else {
        p.textContent="Incorrect password. Please try again.";
        msg.appendChild(p);
    }
//test tes test
console.log("test ")
console.log("test ")
console.log("test ")
console.log("test ")
console.log("test ")
console.log("test ")
});