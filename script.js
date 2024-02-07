// Функция для открытия и закрытия модального окна
const toggleModal = (openModalLink, modal, closebtn) => {
  const openModal = (event) => {
    modal.classList.add("open");
  };

  const closeModal = (event) => {
    modal.classList.remove("open");
  };

  const handleClickOutside = (event) => {
    if (!modal.contains(event.target) && event.target !== openModalLink) {
      closeModal();
      document.removeEventListener("click", handleClickOutside);
    }
  };

  openModalLink.addEventListener("click", openModal);
  closebtn.addEventListener("click", closeModal);
  document.addEventListener("click", handleClickOutside);
};

// Цикл для перебора всех модальных окон
for (let i = 0; i < 15; i++) {
  const openModalLink = document.getElementById("link" + i);
  const modal = document.getElementById("service-" + i);
  const closebtn = document.getElementById("close" + i);

  toggleModal(openModalLink, modal, closebtn);
}
