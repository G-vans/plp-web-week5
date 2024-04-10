document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form
    document.getElementById('contact-form').reset();
});
