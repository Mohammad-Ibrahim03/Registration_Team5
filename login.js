// login.js
import { _users } from './data.js';

const loginForm = document.getElementById("loginForm");
const loginPassword = document.getElementById("loginPassword");
const loginEmail = document.getElementById("loginEmail");
const msg = document.getElementById("message");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        msg.innerHTML = "";
        
        const existingUser = _users.find((user) => user.Email === loginEmail.value);
        let p = document.createElement("p");

        if (!existingUser) {
            p.textContent = "Email not found. Please register first.";
            msg.appendChild(p);
            return;
        }

        if (existingUser.Password === loginPassword.value) {
            p.textContent = "Login successful! Welcome " + existingUser.FullName;
            msg.appendChild(p);
            loginForm.reset();
        } else {
            p.textContent = "Incorrect password. Please try again.";
            msg.appendChild(p);
        }
    });
}