
document.addEventListener('DOMContentLoaded', function() {
    
    document.body.addEventListener('click', function(event) {
      if (event.target.classList.contains('fa-heart')) {
        const heartIcon = event.target;
        const stallElement = heartIcon.closest('.stall');
        const stallName = stallElement.querySelector('p').textContent;
        
        // Creating the Loading spinner
        const spinner = document.createElement('div');
        spinner.className = 'spinner';
        
        heartIcon.insertAdjacentElement('afterend', spinner);
        
        // heart unfilled and spinner shows
        heartIcon.classList.replace('fas', 'far');
        spinner.style.display = 'inline-block';
        
        setTimeout(() => {
          stallElement.remove();
          
          removeFromFavourites(stallName);
          
          // Show message if no favourites left
          if (document.querySelectorAll('.stall').length === 0) {
            document.getElementById('favouriteStallsContainer').innerHTML = 
              '<p>No favourites added yet.</p>';
          }
        }, 1000);
      }
    });
    
    //remove from localStorage
    function removeFromFavourites(stallName) {
      const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
      const updatedFavourites = favourites.filter(stall => stall.name !== stallName);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    }
  });