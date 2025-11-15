const btn = document.getElementById('thmchange');
const icon = document.getElementById("icon");


const body = document.body;


if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    icon.textContent = "☀️";
}

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      icon.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      icon.textContent = "🌙";
    }

    
});

