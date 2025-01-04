document.addEventListener("DOMContentLoaded", () => {
    const modal3 = document.getElementById("modal3");
    const closeModal3 = document.getElementById("close3");
    const openModal3 = document.getElementById("open-modal3");
  
    openModal3.addEventListener("click", (e) => {
      e.preventDefault();
      modal3.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  
    closeModal3.addEventListener("click", () => {
      modal3.classList.remove("show");
      document.body.style.overflow = "";
    });
  
    modal3.addEventListener("click", (e) => {
      if (e.target === modal2) {
        modal3.classList.remove("show");
        document.body.style.overflow = "";
      }
    });
  });