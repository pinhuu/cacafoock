// main.js - отвечает за основную логику сайта

// Импорт 
import { saveTheme, getTheme } from './storage.js';

// Константы
const btn = document.getElementById('thmchange');
const icon = document.getElementById("icon");
const body = document.body;

// Вызов функции
const currentTheme = getTheme();

// загрузка темы при загрузке страницы
if (currentTheme === 'dark' ) {
  body.classList.add('dark');
  icon.textContent = "☀️";
} else {
  body.classList.remove('dark');
  icon.textContent = "🌙";
}

// Обработчик клика по кнопке смены темы
btn.addEventListener('click', function() {
    body.classList.toggle('dark');
    let theme = 'light';
    if (body.classList.contains('dark')) {
        theme = 'dark';
        icon.textContent = "☀️";
    } else {
        icon.textContent = "🌙";
    }
    // Сохранение выбранной темы в локальное хранилище
    saveTheme(theme);
});





