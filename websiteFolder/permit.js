document.getElementById('certificateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const businessName = document.getElementById('businessName').value;
    const licenseNumber = document.getElementById('licenseNumber').value;
    const description = document.getElementById('description').value;

    const application = {
        name: name,
        businessName: businessName,
        licenseNumber: licenseNumber,
        description: description
    };

    addApplicationToList(application);
    this.reset(); // Clear the form after submission
});

function addApplicationToList(application) {
    const applicationList = document.getElementById('applicationList');
    const li = document.createElement('li');
    li.textContent = `${application.name} - ${application.businessName} (${application.licenseNumber}): ${application.description}`;
    applicationList.appendChild(li);
}
