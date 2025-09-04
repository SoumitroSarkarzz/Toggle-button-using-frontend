const input = document.getElementById("input");

input.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", input.checked);
});