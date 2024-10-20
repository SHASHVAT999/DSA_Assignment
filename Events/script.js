
const adminLogin = "admin";
const adminPassword = "admin123";
const userLogin = "user";
const userPassword = "user123";


let loggedInRole = "";

function login() {
    const selectedRole = document.querySelector("input[name='role']:checked");
    const loginID = document.getElementById("login-id").value;
    const password = document.getElementById("password").value;

    if (!selectedRole) {
        alert("Please select a role!");
        return;
    }

    const role = selectedRole.value;

    if (role === "admin" && loginID === adminLogin && password === adminPassword) {
        loggedInRole = "admin"; 
        showAdminPanel();
    } else if (role === "user" && loginID === userLogin && password === userPassword) {
        loggedInRole = "user"; 
        showUserPanel();
    } else {
        alert("Invalid credentials!");
        return;
    }

    clearLoginInputs();
}

function showAdminPanel() {
    document.querySelector(".admin-panel").classList.remove("hidden");
    document.getElementById("user-panel").classList.remove("hidden");
}


function showUserPanel() {
    document.querySelector(".admin-panel").classList.add("hidden");
    document.getElementById("user-panel").classList.remove("hidden");
}


function clearLoginInputs() {
    document.getElementById("login-id").value = "";
    document.getElementById("password").value = "";
    const selectedRole = document.querySelector("input[name='role']:checked");
    if (selectedRole) selectedRole.checked = false;
}

function addEvent() {
    const eventName = document.getElementById("event-name").value;
    const eventDate = document.getElementById("event-date").value;
    const eventVenue = document.getElementById("event-venue").value;
    const eventTime = document.getElementById("event-time").value;

    if (!eventName || !eventDate || !eventVenue || !eventTime) {
        alert("Please fill out all fields!");
        return;
    }

    const tableBody = document.querySelector("#events-table tbody");
    const newRow = tableBody.insertRow();

    newRow.innerHTML = `
        <td>${eventName}</td>
        <td>${eventDate}</td>
        <td>${eventVenue}</td>
        <td>${eventTime}</td>
        <td>${createActionButton()}</td>
    `;

    clearEventInputs();
}


function createActionButton() {
    
    if (loggedInRole === "admin") {
        return `<button onclick="deleteEvent(this)">Delete</button>`;
    } else if (loggedInRole === "user") {
        return `<button onclick="bookEvent()">Book</button>`;
    }
}

function deleteEvent(button) {
    const row = button.closest("tr");
    row.remove();
}

function bookEvent() {
    alert("Event Ticket Booked Successfully!");
}

function clearEventInputs() {
    document.getElementById("event-name").value = "";
    document.getElementById("event-date").value = "";
    document.getElementById("event-venue").value = "";
    document.getElementById("event-time").value = "";
}
