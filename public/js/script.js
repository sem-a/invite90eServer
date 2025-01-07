document.querySelector(".btn").addEventListener("click", function () {
  // Получаем значение из поля ввода
  const nameInput = document.getElementById("name");
  const nameValue = nameInput.value;

  const newNameValue = nameValue.replace(/\s+/g, "");

  // Проверяем, что поле не пустое
  if (newNameValue.trim() === "") {
    alert("Пожалуйста, введите имя.");
    return;
  }

  const valueArray = newNameValue.split("+");

  // Отправляем POST-запрос на /api/add
  fetch("http://sem-a-invite90eserver-f53e.twc1.net/api/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: valueArray[0], count: valueArray[1] }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Успех:", data);
      // Здесь вы можете добавить код для обработки успешного ответа от сервера,
      // например очистка поля или отображение сообщения об успехе.
      nameInput.value = ""; // Очищаем поле после успешной отправки.
      alert("Форма отправлена!");
    })
    .catch((error) => {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке данных. Попробуйте еще раз.");
    });
});
