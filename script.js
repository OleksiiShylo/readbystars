const toggleModal = (openModalLink, modal, closebtn) => {
  const openModal = (event) => {
    modal.classList.add("open");
    document.addEventListener("keydown", handleKeyDown);
  };

  const closeModal = (event) => {
    modal.classList.remove("open");
    document.removeEventListener("keydown", handleKeyDown);
  };

  const handleClickOutside = (event) => {
    const modalBox = modal.querySelector(".modal-box");
    if (!modalBox.contains(event.target) && event.target !== openModalLink) {
      closeModal();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  openModalLink.addEventListener("click", openModal);
  closebtn.addEventListener("click", closeModal);
  document.addEventListener("click", handleClickOutside);
};

// Получение элементов модальных окон и добавление обработчиков событий
const modalElements = document.querySelectorAll(".modal");
modalElements.forEach((modal) => {
  const modalIndex = modal.getAttribute("data-index");
  const openModalLink = document.getElementById("link" + modalIndex);
  const closebtn = modal.querySelector(".close");

  toggleModal(openModalLink, modal, closebtn);
});
