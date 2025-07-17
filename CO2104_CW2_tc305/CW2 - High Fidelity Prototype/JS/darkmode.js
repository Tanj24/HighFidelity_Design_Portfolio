document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;
  
  if (!darkModeToggle) return;

  
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '🌙';
    darkModeToggle.title = 'Light Mode'; 
  } else {
    darkModeToggle.title = 'Dark Mode'; 
  }
  
  //switching between light and dark
  darkModeToggle.addEventListener('click', function() {
    const isDarkMode = !body.classList.contains('dark-mode');
    body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
    
    // Update icon and hover
    darkModeToggle.textContent = isDarkMode ? '🌙' : '🌓';
    darkModeToggle.title = isDarkMode ? 'Light Mode' : 'Dark Mode';
  });
});