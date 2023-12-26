document.getElementById('wishForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('nameInput').value;
    var wishType = document.getElementById('wishType').value;
    var wish = document.getElementById('wishInput').value;
    if (name.length > 0 && wish.length > 0 && wish.length <= 10) {
        var newWishElement = document.createElement('div');
        newWishElement.className = 'wish';
        newWishElement.textContent = name + " wishes to " + wish;
        document.getElementById('wishWall').appendChild(newWishElement);
        document.getElementById('nameInput').value = '';
        document.getElementById('wishInput').value = '';
    } else {
        alert('No more than 10 words');
    }
});
