function showContente(id) {
    const content = document.getElementById(id);
    const isVisible = content.style.display === "block";
  
    const allContents = document.querySelectorAll('.bt-content');
    allContents.forEach(el => el.style.display = 'none');
  
    if (!isVisible) {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
  }