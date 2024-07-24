function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");
  
    const img = document.querySelector("#foto img");
  
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/eu2.png");
    } else {
      img.setAttribute("src", "./assets/eu.png");
    }
  }