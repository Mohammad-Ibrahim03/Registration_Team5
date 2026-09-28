// data.js
// Get existing users from localStorage, or return an empty array if none exist
export const _users = JSON.parse(localStorage.getItem("users")) || [];

// Function to save the updated array back to localStorage
export function saveUsers() {
    localStorage.setItem("users", JSON.stringify(_users));
}