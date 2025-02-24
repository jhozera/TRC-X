function toggleContent() {
    var content = document.getElementById("hiddenContent");
    var button = document.querySelector(".toggle-button");

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = "Mostrar Menos";
    } else {
        content.style.display = "none";
        button.textContent = "Mostrar Mais";
    }
}