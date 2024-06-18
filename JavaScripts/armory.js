// Function to show details modal
function showDetails(itemId) {
    var item = document.getElementById(itemId);
    var modal = document.getElementById('details-modal');
    var modalImage = document.getElementById('modal-image');
    var modalTitle = document.getElementById('modal-title');
    var modalDescription = document.getElementById('modal-description');

    modalImage.src = item.querySelector('img').src;
    modalTitle.textContent = item.querySelector('h2').textContent;
    modalDescription.textContent = item.querySelector('p').textContent;

    modal.style.display = 'block';
}

// Function to close details modal
function closeDetails() {
    var modal = document.getElementById('details-modal');
    modal.style.display = 'none';
}

// Close modal if user clicks outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById('details-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
