// storage.js - отвечает за работу с локальным хранилищем

// Ключ
const themeKey = 'theme';

// Функция для сохранения темы в локальное хранилище
export function saveTheme(theme) {
    localStorage.setItem(themeKey, theme);
}

// Функция для получения темы из локального хранилища
export function getTheme() {
    return localStorage.getItem(themeKey);
}