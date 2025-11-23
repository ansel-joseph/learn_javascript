const msg = document.getElementById("msg");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {
    msg.textContent = "Text Changed!";
});
