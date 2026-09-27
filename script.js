
let _users = [];

const userForm=document.getElementById("regForm");
const nameInput = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const address = document.getElementById("address");
const confirmPassword = document.getElementById("confirmPassword");

userForm.addEventListener("submit",function(event){
    event.preventDefault();
_users.push({
    
    FullName:nameInput.value,
    Email:email.value,
    Password:password.value,
    Address:address.value,
    
})
console.log(_users);
});