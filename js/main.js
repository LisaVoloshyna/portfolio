const modal = document.getElementById("modal");
const closeModal = document.querySelector(".close");
const openModal = document.getElementById("open-modal");

openModal.addEventListener("click", (e) => {
  e.preventDefault(); // Отключаем переход по ссылке
  modal.classList.add("show"); // Добавляем класс для плавного появления
  document.body.style.overflow = "hidden"; // Отключаем прокрутку страницы
});

// Закрытие модального окна
closeModal.addEventListener("click", () => {
  modal.classList.remove("show"); // Убираем класс для плавного исчезновения
  document.body.style.overflow = ""; // Восстанавливаем прокрутку страницы
});

// Закрытие по клику вне содержимого модального окна
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    document.body.style.overflow = ""; // Восстанавливаем прокрутку страницы
  }
});