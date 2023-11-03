document.addEventListener('DOMContentLoaded', function() {
    const locationName = document.getElementById('location-name');

    const urlParams = new URLSearchParams(window.location.search);
    const location = urlParams.get('location');

    if (location) {
        locationName.textContent = location;
    }
});
