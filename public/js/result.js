// Функция для получения списка гостей
function fetchGuestList() {
  // Выполняем GET-запрос на /api/get
  fetch("https://sem-a-invite90eserver-f53e.twc1.net/api/get")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Сеть ответила с ошибкой: " + response.status);
      }
      return response.json(); // Преобразуем ответ в JSON
    })
    .then((data) => {
      const guestListContainer = document.querySelector(".guest-list");
      const countContainer = document.querySelector(".count_num");

      // Очищаем контейнер перед добавлением новых элементов (если нужно)
      guestListContainer.innerHTML = "";

      let count = data.length;

      data.forEach((guest) => {
        // Предполагается, что data - это массив объектов гостей
        const listItem = document.createElement("div"); // Создаем новый элемент div для каждого гостя

        listItem.textContent = `${guest.name}(${guest.count})`; // Устанавливаем текст элемента как имя гостя

        count += Number(guest.count);

        guestListContainer.appendChild(listItem); // Добавляем элемент в список гостей
      });

      countContainer.innerHTML = count;
    })
    .catch((error) => {
      console.error("Ошибка при получении списка гостей:", error);
    });
}

// Вызываем функцию после загрузки страницы или по вашему усмотрению.
document.addEventListener("DOMContentLoaded", () => {
  fetchGuestList();
});
