
function setupShareButtons() {
    const shareButtons = document.querySelectorAll('.fa-share-alt');
    
    shareButtons.forEach(button => {
      //open pop up
      button.addEventListener('click', function(event) { 
        event.stopPropagation(); 
        const stallName = this.closest('.stall').querySelector('p').textContent;
        openSharePopup(stallName);
      });
    });
    //close pop up
    document.querySelector('.close-share').addEventListener('click', closeSharePopup);
    
    document.getElementById('shareOverlay').addEventListener('click', closeSharePopup);
    
    //(placeholder functionality for share links)
    document.querySelectorAll('.share-option').forEach(option => {
      option.addEventListener('click', function() {
        const method = this.getAttribute('title');
        alert(`[Prototype] This would share via ${method}`);
      });
    });
  }
  //show stall being shared
  function openSharePopup(stallName) {
    const popup = document.getElementById('sharePopup');
    const overlay = document.getElementById('shareOverlay');
    
    popup.querySelector('h3').textContent = `Share ${stallName}`;
    
    popup.style.display = 'block';
    overlay.style.display = 'block';
  }
  
  function closeSharePopup() {
    document.getElementById('sharePopup').style.display = 'none';
    document.getElementById('shareOverlay').style.display = 'none';
  }
  
  document.addEventListener('DOMContentLoaded', setupShareButtons);