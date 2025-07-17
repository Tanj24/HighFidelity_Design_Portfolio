// waiting for html doc to load before running this script
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search-and-icons input');
    const stalls = document.querySelectorAll('.stall');
  
    searchInput.addEventListener('input', function() {
      const searchValue = searchInput.value.toLowerCase();
      stalls.forEach(stall => {
        const stallName = stall.querySelector('p').textContent.toLowerCase();
        if (stallName.includes(searchValue)) {  // show stall based on search and hide others
          stall.style.display = '';
        } else {
          stall.style.display = 'none';
        }
      });
    });
  });
  