function closeBanner() {
  const banner = document.getElementById('banner');
  const closeButton = document.getElementById('closeBanner');

  closeButton.addEventListener('click', () => {
    banner.style.display = 'none';
  });
}

// Call the function to initialize the banner behavior
closeBanner();