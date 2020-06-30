const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let userRequest = prompt("Введите пароль");

if (userRequest === null) {
  message = "Отменено пользователем!";
} else {
  ADMIN_PASSWORD === userRequest
    ? (message = "Добро пожаловать!")
    : (message = "Доступ запрещен, неверный пароль!");
}
alert(message);
