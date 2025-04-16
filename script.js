// script.js
function showPage(pageId) {
  const activePage = document.querySelector('.page.active');
  const nextPage = document.getElementById(pageId);

  if (activePage) {
    activePage.classList.remove('active');
    activePage.classList.add('fade-out');
    setTimeout(() => {
      activePage.style.display = 'none';
      activePage.classList.remove('fade-out');
      nextPage.style.display = 'block';
      // Force reflow to trigger the animation
      nextPage.offsetHeight;
      nextPage.classList.add('active', 'fade-in');
    }, 300); // Duration should match your CSS transition
  } else {
    // If no page is active (initial load or error state), just show the next page
    nextPage.style.display = 'block';
    nextPage.classList.add('active', 'fade-in');
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Email address copied to clipboard!'); // Optional feedback
  }).catch(err => {
    console.error('Failed to copy text: ', err);
    alert('Failed to copy email address.');
  });
}