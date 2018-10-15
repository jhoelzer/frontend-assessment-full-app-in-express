const userCreateForm = document.getElementById("user-create-form")
const userCreateSubmitButton = userCreateForm.querySelector("button[type='submit']")

userCreateForm.addEventListener("submit", submitForm)

function submitForm (event) {
    event.preventDefault();

    let user = {
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        firstName: document.getElementById("first").value,
        lastName: document.getElementById("last").value
    }

    console.log("User: " + user)

    const post = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    };

    fetch("/api/user", post)
        .then(res => res.json())
        .then(data => console.log(data))
}