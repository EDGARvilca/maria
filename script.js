const messageBox = document.querySelector(".message p");
const heartParts = document.querySelectorAll(".heart-part");

heartParts.forEach((part) => {
  part.addEventListener("click", () => {
    const message = part.dataset.message;
    messageBox.textContent = message;
  });
});
