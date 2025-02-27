document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const themeCheckbox = document.getElementById("theme-checkbox");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        body.classList.add("light-mode");
        themeCheckbox.checked = true; 
    }

    themeCheckbox.addEventListener("change", function () {
        if (this.checked) {
            body.classList.add("light-mode");
            localStorage.setItem("theme", "light");
        } else {
            body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark");
        }
    });
});




