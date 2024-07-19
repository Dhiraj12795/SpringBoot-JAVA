document.getElementById('tour-planner-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const details = document.getElementById('details').value;

    const dynamicContent = document.getElementById('dynamic-content');

    // Added dynamic content configuration mapping 

    if (destination && startDate && endDate && details) {
        dynamicContent.innerHTML = `
            <h3>Your Trip Summary</h3>
            <p><strong>Destination:</strong> ${destination.charAt(0).toUpperCase() + destination.slice(1)}</p>
            <p><strong>Start Date:</strong> ${startDate}</p>
            <p><strong>End Date:</strong> ${endDate}</p>
            <p><strong>Details:</strong> ${details}</p>
        `;
    } else {
        dynamicContent.innerHTML = `<p>Please fill in all fields.</p>`;
    }
});
