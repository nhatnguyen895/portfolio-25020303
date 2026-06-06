/* ==========================================
   PORTFOLIO PDF EXPORT JAVASCRIPT
   Owner: Nguyen Ba Nhat (25020303)
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const pdfBtn = document.getElementById('pdfBtn');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', (e) => {
      e.preventDefault();
      // Open the pdf-export page in a new window/tab with print command enabled
      window.open('pdf-export.html?print=true', '_blank');
    });
  }

  // Automatic print trigger on pdf-export.html page if requested
  const isExportPage = window.location.pathname.includes('pdf-export.html');
  if (isExportPage) {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('print') === 'true') {
      window.addEventListener('load', () => {
        // Wait 1.5 seconds to ensure styles, fonts and images are fully rendered
        setTimeout(() => {
          window.print();
        }, 1500);
      });
    }
  }
});
