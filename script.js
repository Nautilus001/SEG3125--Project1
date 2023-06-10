// Get the appointment form element
const appointmentForm = document.getElementById('appointmentForm');

// Add event listener for form submission
appointmentForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get form input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  // Create an object with the appointment details
  const appointment = {
    name,
    email,
    date,
    time
  };

  // Perform any necessary validation

  // Send the appointment details to a server or perform other actions
  // Example: You can make an AJAX request to a backend endpoint to save the appointment details

  // Reset the form
  appointmentForm.reset();
});