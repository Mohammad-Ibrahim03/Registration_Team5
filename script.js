// register.js
import { _users, saveUsers } from './data.js';

const regForm = document.getElementById("regForm");
const nameInput = document.getElementById("fullName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const address = document.getElementById("address");

// Calculate the next ID based on existing users
let nextUser = _users.length > 0 ? _users[_users.length - 1].id + 1 : 1;

if (regForm) {
    regForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        _users.push({
            id: nextUser,
            FullName: nameInput.value,
            Email: email.value,
            Password: password.value,
            Address: address.value,
        });

        // Save to browser memory!
        saveUsers(); 
        
        console.log("User registered:", _users);
        nextUser++;
        regForm.reset();
    });
}