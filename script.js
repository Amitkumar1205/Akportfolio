document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });
  
  // Toggle sidebar on small screens
  function toggleSidebar() {
    const sidebar = document.querySelector(".w3-sidebar");
    const main = document.querySelector("#main");
    sidebar.classList.toggle("w3-show-small");
    main.classList.toggle("w3-margin-left");
  }