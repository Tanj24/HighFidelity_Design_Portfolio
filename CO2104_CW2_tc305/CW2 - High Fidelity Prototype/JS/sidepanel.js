document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidePanel = document.getElementById('side-panel');
    const closePanel = document.querySelector('.close-panel');
    const overlay = document.getElementById('panel-overlay');
    
    if (!menuToggle || !sidePanel) return;
    //open side panel
    menuToggle.addEventListener('click', function() {
      sidePanel.classList.add('open');
      overlay.style.display = 'block';
    });
    //close side panel
    closePanel.addEventListener('click', function() {
      sidePanel.classList.remove('open');
      overlay.style.display = 'none';
    });
    
    overlay.addEventListener('click', function() {
      sidePanel.classList.remove('open');
      overlay.style.display = 'none';
    });
  });