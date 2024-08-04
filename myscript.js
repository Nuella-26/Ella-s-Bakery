function button() {
    // Get form field values
    var fname = document.getElementById("fname").value.trim(); 
    var lname = document.getElementById("lname").value.trim();
    var email = document.getElementById("email").value.trim();
    var complain = document.getElementById("subject").value.trim();

    // Create error message element (if it doesn't exist)
    var errorMessage = document.getElementById('error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('p');
        errorMessage.id = 'error-message';
        document.getElementById('myForm').appendChild(errorMessage);
    }

    // Basic validation with improved error handling
    if (fname === "") {
        errorMessage.textContent = "First Name cannot be blank";
    } else if (lname === "") {
        errorMessage.textContent = "Last Name cannot be blank";
    } else if (email === "") {
        errorMessage.textContent = "Please input your email";
    } else if (!validateEmail(email)) {  // Added email format validation
        errorMessage.textContent = "Please enter a valid email address";
    } else if (complain === "") {
        errorMessage.textContent = "Please kindly state your complaints";
    } else {
        // Success - clear error message and show alert
        errorMessage.textContent = "";
        alert("Your form has been successfully submitted. Thank you for contacting us, we'll get back to you in the next few hours.");
        
        // Optional: Redirect or reset the form
        //location.href = "contact.html";  // Redirect to a thank you page
        document.getElementById('myForm').reset(); // Reset the form
    }
}

// Helper function to validate email format (basic)
function validateEmail(email) {
    // You can use a more robust regular expression for better email validation
    const re = /\S+@\S+\.\S+/; 
    return re.test(email);
}

