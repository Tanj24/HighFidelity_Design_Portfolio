window.onload = function () {
    // Load stalls from local storage 
    const favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  
    const heartIcons = document.querySelectorAll('.stall-actions i.far.fa-heart');
  
    heartIcons.forEach((icon, index) => {
      const stallName = icon.closest('.stall').querySelector('p').innerText;
  
      // If stall in favourite fills the heart 
      if (favourites.some(stall => stall.name === stallName)) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        icon.nextElementSibling.style.display = 'none'; 
      }
    });
  
    heartIcons.forEach(icon => {
      icon.addEventListener('click', function () {
        const stallName = icon.closest('.stall').querySelector('p').innerText;
        const stallImage = icon.closest('.stall').querySelector('img').src; 

        let favourites = JSON.parse(localStorage.getItem('favourites')) || [];
  
        // remove from favourites directly on dashboard instead of favourites.html
        if (icon.classList.contains('fas')) {
          icon.classList.remove('fas');
          icon.classList.add('far');
          favourites = favourites.filter(fav => fav.name !== stallName); 
        } else {
          icon.classList.remove('far');
          icon.classList.add('fas');
          favourites.push({ name: stallName, image: stallImage });
          icon.nextElementSibling.style.display = 'block'; 
          setTimeout(() => icon.nextElementSibling.style.display = 'none', 2000); 
        }
  
        //updates localStorage
        localStorage.setItem('favourites', JSON.stringify(favourites));
      });
    });


}

  
  