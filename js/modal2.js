document.addEventListener("DOMContentLoaded", () => {
    const modal2 = document.getElementById("modal2");
    const closeModal2 = document.getElementById("close2");
    const openModal2 = document.getElementById("open-modal2");
  
    openModal2.addEventListener("click", (e) => {
      e.preventDefault();
      modal2.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  
    closeModal2.addEventListener("click", () => {
      modal2.classList.remove("show");
      document.body.style.overflow = "";
    });
  
    modal2.addEventListener("click", (e) => {
      if (e.target === modal2) {
        modal2.classList.remove("show");
        document.body.style.overflow = "";
      }
    });
  });