
// CONTACT FORM DOM VALIDATION

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const errorMsg = document.getElementById("error");
const successMsg = document.getElementById("success");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "" || email === "" || message === "") {
        errorMsg.textContent = "All fields are required!";
        successMsg.textContent = "";
        return;
    }

    if (!email.includes("@")) {
        errorMsg.textContent = "Please enter a valid email address!";
        successMsg.textContent = "";
        return;
    }

    successMsg.textContent = "Message sent successfully!";
    errorMsg.textContent = "";

    form.reset();
});


// FOOTER YEAR (DOM)

const footerDate = document.getElementById("footer-date");
if (footerDate) {
    footerDate.textContent = `© ${new Date().getFullYear()} ProServices`;
}
