document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const newLocation = button.getAttribute('data-location');
            window.location.href = `testing1.html?location=${newLocation}`;
        });
    });
});
