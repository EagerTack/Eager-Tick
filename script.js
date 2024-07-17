document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('changeTextBtn');
    const content = document.getElementById('content');

    button.addEventListener('click', function() {
        content.innerHTML = '<p>Text changed using JavaScript!</p>';
    });
});
