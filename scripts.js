/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function () 
{
    const emailInput = document.querySelector("#email");
    const message = document.querySelector(".message");
    const submitButton = document.querySelector("button");

    const displayMessage = (isValid) =>
    {
        message.textContent = isValid ? `Thank you! Your email address ${emailInput.value} has been added to our mailing list`
            : "Please enter a valid email address";
    };

    submitButton.addEventListener("click", (event) => 
    {
        event.preventDefault();

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const address = emailInput.value;

        if (address.match(emailPattern)) 
        {
            displayMessage(true);
            emailInput.value = "";
        } 
        else 
        {
            displayMessage(false);
        }
    });
});