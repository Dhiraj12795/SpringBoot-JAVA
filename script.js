document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('tour-planner-form');
    const errorMessage = document.createElement('p');
    errorMessage.id = 'error-message';
    form.insertBefore(errorMessage, form.firstChild);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        errorMessage.textContent = '';

        const destination = document.getElementById('destination').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const details = document.getElementById('details').value;

        if (!destination || !startDate || !endDate || !details) {
            errorMessage.textContent = 'Please fill in all fields.';
            return;
        }

        if (new Date(startDate) > new Date(endDate)) {
            errorMessage.textContent = 'End date must be after the start date.';
            return;
        }

        loadDynamicContent(destination, startDate, endDate, details);
    });

    function loadDynamicContent(destination, startDate, endDate, details) {
        const dynamicContentSection = document.getElementById('dynamic-content');
        dynamicContentSection.innerHTML = `
            <h3>Your Planned Trip</h3>
            <p><strong>Destination:</strong> ${destination}</p>
            <p><strong>Start Date:</strong> ${startDate}</p>
            <p><strong>End Date:</strong> ${endDate}</p>
            <p><strong>Details:</strong> ${details}</p>
        `;
    }
});
