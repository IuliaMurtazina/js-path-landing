const inputs = document.querySelectorAll(".form__input");

inputs.forEach((input) => {
  const id = input.id;
  const label = document.querySelector(`label[for="${id}"]`);

  input.addEventListener("focus", () => {
    label.classList.add("top");
    if (input.classList.contains("form__input--select")) {
      const icon = document.querySelector(`div[data-input=${id}]`);
      icon.classList.add("top");
    }
  });

  input.addEventListener("blur", () => {
    setTimeout(() => {
      if (input.classList.contains("form__input--select")) {
        const icon = document.querySelector(`div[data-input=${id}]`);
        icon.classList.remove("top");
      }
      if (input.value.trim() !== "") return;
      label.classList.remove("top");
    }, 100);
  });
});
