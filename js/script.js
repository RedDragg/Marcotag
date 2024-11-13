function toggleMenu() {
    // Selecteer de hamburger-knop en het zijmenu
    const hamburger = document.querySelector('.hamburger');
    const sidemenu = document.getElementById('sidemenu');
  
    // Toggle de 'active' klasse op de hamburger-knop
    hamburger.classList.toggle('active');
  
    // Toggle de 'sidemenu' klasse op de <ul> om het zijmenu te openen/sluiten
    sidemenu.classList.toggle('sidemenu');
  }
  