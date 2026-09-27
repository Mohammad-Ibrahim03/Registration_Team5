
let _users = [];

const userForm=document.getElementById("");
const nameInput = document.getElementById("fullName");

userForm.addEventListener("submit",function(event){
_users.push({fullName:nameInput.value})

});