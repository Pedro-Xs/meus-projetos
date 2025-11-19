// Filtro de busca
const searchInput = document.getElementById("search");
const projects = document.querySelectorAll(".project-card");

searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase();
  projects.forEach(project => {
    const title = project.querySelector("h2").textContent.toLowerCase();
    project.style.display = title.includes(term) ? "block" : "none";
  });
});

// Alternar tema claro/escuro
const toggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  toggleBtn.textContent = currentTheme === "dark" ? "☀️" : "🌙";
}

toggleBtn.addEventListener("click", () => {
  const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  toggleBtn.textContent = theme === "dark" ? "☀️" : "🌙";
});